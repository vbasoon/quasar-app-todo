<template>
  <q-page padding>
    <ul>
      <task v-for="(task, idx) in tasks" :key="idx" :task="task">
        <div>{{ task.title }}</div>
        <small>{{ task.dueDate }} {{ task.dueTime }}</small>
        <button @click="deleteTask(idx)">X</button>
      </task>
    </ul>
  </q-page>
</template>

<script>
import Task from "src/components/TaskVue.vue";
export default {
  data() {
    return {
      tasks: [
        {
          title: "Task 1",
          dueDate: "2020-01-01",
          dueTime: "18:30",
          completed: false,
        },
        {
          title: "Task 2",
          dueDate: "2020-01-02",
          dueTime: "14:00",
          completed: false,
        },
        {
          title: "Task 3",
          dueDate: "2020-01-03",
          dueTime: "16:00",
          completed: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
  components: {
    task: Task,
  },
};
</script>

<style></style>
