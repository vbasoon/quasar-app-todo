<template>
  <li>
    <div>{{ task.title }}</div>
    <small>{{ task.dueDate }} {{ task.dueTime }}</small>
    <button @click="deleteTask(idx)">X</button>
  </li>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
