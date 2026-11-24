from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MergeStrategy(str, Enum):
    MERGE_COMMIT = "merge_commit"
    SQUASH = "squash"
    FAST_FORWARD = "fast_forward"
    SQUASH_FAST_FORWARD = "squash_fast_forward"
    REBASE_FAST_FORWARD = "rebase_fast_forward"
    REBASE_MERGE = "rebase_merge"

    __str__ = str.__str__


MergeStrategyOrStr: TypeAlias = Annotated[MergeStrategy | str, open_enum_validator(MergeStrategy)]
