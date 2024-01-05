from wtforms import Form, BooleanField, StringField, PasswordField, validators,EmailField


class RegistrationForm(Form):
    username = StringField('Username', [validators.Length(min=8, max=20)])
    email = EmailField('Email address', [validators.DataRequired(), validators.Email()])
    password = PasswordField('New Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords must match')
    ])
    confirm = PasswordField('Repeat Password')
    accept_tos = BooleanField('I accept the TOS', [validators.DataRequired()])