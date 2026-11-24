from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CoverageModel(str, Enum):
    MATCHED = "matched"
    DUTCHING = "dutching"

    __str__ = str.__str__


CoverageModelOrStr: TypeAlias = Annotated[CoverageModel | str, open_enum_validator(CoverageModel)]
