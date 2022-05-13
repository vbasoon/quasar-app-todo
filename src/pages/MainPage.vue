<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-icon name="event" size="18px"> </q-icon>

        <q-item-section side top>
          <div class="row">
            <div class="column">
              <q-item-label caption>
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label caption>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
//import Task from "src/components/TaskVue.vue";
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          completed: false,
          dueDate: "2022-05-11",
          dueTime: "12:00",
        },
        {
          id: 2,
          title: "Task 2",
          completed: true,
          dueDate: "2022-05-12",
          dueTime: "13:00",
        },
        {
          id: 3,
          title: "Task 3",
          completed: false,
          dueDate: "2022-05-13",
          dueTime: "16:00",
        },
      ],
    };
  },
  /* methods: {
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
  }, */
  /* components: {
    task: Task,
  }, */
};
</script>

<style></style>
