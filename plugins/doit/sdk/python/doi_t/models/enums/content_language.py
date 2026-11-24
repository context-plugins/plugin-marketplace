from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentLanguage(str, Enum):
    EN = "en"

    __str__ = str.__str__


ContentLanguageOrStr: TypeAlias = Annotated[ContentLanguage | str, open_enum_validator(ContentLanguage)]
