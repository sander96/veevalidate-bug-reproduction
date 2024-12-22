<script setup lang="ts">
import {Field, useForm} from "vee-validate";
import {z} from "zod";
import {toTypedSchema} from "@vee-validate/zod";

const formSchema = z.object({
  field1: z.string().optional(),
  field2: z.string().min(1),
  field3: z.string().min(1)
})

const {handleSubmit, values, meta, resetForm, defineField} = useForm({
  validationSchema: toTypedSchema(formSchema)
});

const [field1]  = defineField('field1');
const [field2]  = defineField('field2');
const [field3]  = defineField('field3');

const onSubmit = handleSubmit(submitValues => {
  console.log(submitValues)
})

function reset() {
  resetForm({
    values: {
      //field1: undefined,
      field2: 'value2',
      field3: 'value3'
    }
  })
}
</script>

<template>
  <form @submit="onSubmit">
    <Field name="field1">
      <input type="text" v-model="field1">
    </Field>

    <Field name="field2">
      <input type="text" v-model="field2">
    </Field>

    <Field name="field3">
      <input type="text" v-model="field3">
    </Field>

    <div>
      <button @click="reset()">Reset</button>

      <button type="submit">Submit</button>
    </div>
  </form>

  <div>values: {{ values }}</div>

  <div>meta: {{ meta }}</div>
</template>
