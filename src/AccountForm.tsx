import FormWrapper from "./FormWrapper";

export default function AccountForm() {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required min={1} type="password" />
    </FormWrapper>
  );
}
