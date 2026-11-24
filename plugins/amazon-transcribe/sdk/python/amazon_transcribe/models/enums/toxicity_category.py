from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ToxicityCategory(str, Enum):
    ALL = "ALL"

    __str__ = str.__str__


ToxicityCategoryOrStr: TypeAlias = Annotated[ToxicityCategory | str, open_enum_validator(ToxicityCategory)]
