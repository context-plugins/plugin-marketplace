from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CompletionType(str, Enum):
    ALL = "all"
    ANY = "any"

    __str__ = str.__str__


CompletionTypeOrStr: TypeAlias = Annotated[CompletionType | str, open_enum_validator(CompletionType)]
