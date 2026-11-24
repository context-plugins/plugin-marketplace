from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureLanguage(str, Enum):
    """Determines in which language e-mails are sent to the user, if the user has not set their language preference
    yet."""

    EN = "en"
    DE = "de"
    FR = "fr"
    IT = "it"

    __str__ = str.__str__


SignatureLanguageOrStr: TypeAlias = Annotated[SignatureLanguage | str, open_enum_validator(SignatureLanguage)]
