new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    events: [
      { time: '9:30', description: 'チームミーティング（朝会）' },
      { time: '11:30', description: '休憩' },
      { time: '16:45', description: 'チームミーティング（夕会）' }
    ],
    newEvent: {
      time: '',
      description: ''
    }
  },
  methods: {
    addEvent() {
      if (this.newEvent.time.trim() !== '' && this.newEvent.description.trim() !== '') {
        this.events.push({
          time: this.newEvent.time.trim(),
          description: this.newEvent.description.trim()
        });
        this.newEvent.time = '';
        this.newEvent.description = '';
      }
    },
    editEvent(index) {
      const editedTime = prompt('新しい時間を入力してください:', this.events[index].time);
      const editedDescription = prompt('新しい予定を入力してください:', this.events[index].description);
      if (editedTime !== null && editedDescription !== null) {
        this.events[index].time = editedTime.trim();
        this.events[index].description = editedDescription.trim();
      }
    },
    deleteEvent(index) {
      if (confirm('この予定を削除しますか？')) {
        this.events.splice(index, 1);
      }
    }
  }
});