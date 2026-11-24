from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode(str, Enum):
    """Session language, used to launch HPP with desired language."""

    AR = "ar"
    EN = "en"

    __str__ = str.__str__


LanguageCodeOrStr: TypeAlias = Annotated[LanguageCode | str, open_enum_validator(LanguageCode)]
