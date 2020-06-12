// @ts-ignore
export const passwordsMatch: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const currentPassword = group.get('currentPassword');
    const newPassword = group.get('newPassword');

    if (currentPassword && newPassword) {
        if (currentPassword.pristine || newPassword.pristine) {
            return null;
        }
        if (currentPassword.value === newPassword.value) {
            return { passwordsMatch: true };
        }
    }
    return null;
};
