new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
        events: [],
        newEvent: {
          time: '',
          description: ''
        }
      },
  mounted() {
        // ローカルストレージからデータを取得
        const storedEvents = localStorage.getItem('events');
        if (storedEvents) {
          this.events = JSON.parse(storedEvents);
        }
      },
  methods: {
    addEvent() {
      if (this.newEvent.time.trim() !== '' && this.newEvent.description.trim() !== '') {
        this.events.push({
          time: this.newEvent.time.trim(),
          description: this.newEvent.description.trim()
        });
        this.saveEvents(); // データを保存
        this.clearFields(); // 入力フィールドをクリア
      }
    },
    editEvent(index) {
      const editedTime = prompt('新しい時間を入力してください:', this.events[index].time);
      const editedDescription = prompt('新しい予定を入力してください:', this.events[index].description);
      if (editedTime !== null && editedDescription !== null) {
        this.events[index].time = editedTime.trim();
        this.events[index].description = editedDescription.trim();
        this.saveEvents(); // データを保存
      }
    },
    deleteEvent(index) {
      if (confirm('この予定を削除しますか？')) {
        this.events.splice(index, 1);
        this.saveEvents(); // データを保存
      }
    },
    saveEvents() {
          // ローカルストレージにデータを保存
          localStorage.setItem('events', JSON.stringify(this.events));
        },
    clearFields() {
          // 入力フィールドをクリア
          this.newEvent.time = '';
          this.newEvent.description = '';
        }
  }
});