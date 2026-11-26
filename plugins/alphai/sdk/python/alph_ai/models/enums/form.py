from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Form(str, Enum):
    _8_K = "8-K"
    _6_K = "6-K"

    __str__ = str.__str__


FormOrStr: TypeAlias = Annotated[Form | str, open_enum_validator(Form)]
