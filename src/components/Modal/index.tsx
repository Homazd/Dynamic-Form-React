import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, TextInput, Select, Checkbox } from "@mantine/core";
import { useState } from "react";

const AddFieldModal = () =>  {
  const [opened, { open, close }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="افزودن فیلد">
      <TextInput label="لطفا عنوان فیلد را وارد کنید " placeholder="عنوان فیلد" />
      <TextInput mt={20} label="لطفا عنوان نمایشی فیلد را وارد کنید " placeholder="عنوان نمایشی فیلد" />
      <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
        <Checkbox label="فیلد اجباری باشد" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />

      </Modal>
      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
export default AddFieldModal;