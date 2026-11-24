from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BranchMatchKind(str, Enum):
    """Indicates how the restriction is matched against a branch. The default is ``glob``."""

    BRANCHING_MODEL = "branching_model"
    GLOB = "glob"

    __str__ = str.__str__


BranchMatchKindOrStr: TypeAlias = Annotated[BranchMatchKind | str, open_enum_validator(BranchMatchKind)]
