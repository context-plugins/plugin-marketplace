from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TargetSelection(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"

    __str__ = str.__str__


TargetSelectionOrStr: TypeAlias = Annotated[TargetSelection | str, open_enum_validator(TargetSelection)]
