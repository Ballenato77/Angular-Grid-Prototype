// @ts-ignore
export const passwordsDoNotMatch: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const currentPassword = group.get('password');
    const newPassword = group.get('confirmPassword');

    if (currentPassword && newPassword) {
        if (currentPassword.pristine || newPassword.pristine) {
            return null;
        }
        if (currentPassword.value !== newPassword.value) {
            return { passwordsDoNotMatch: true };
        }
    }
    return null;
};
