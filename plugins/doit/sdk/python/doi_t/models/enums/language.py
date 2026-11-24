from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Language(str, Enum):
    """The user's preferred language."""

    EN = "en"
    JA = "ja"

    __str__ = str.__str__


LanguageOrStr: TypeAlias = Annotated[Language | str, open_enum_validator(Language)]
