<template>
  <q-item tag="label" v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="check1" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Notifications</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    task: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
};
</script>
