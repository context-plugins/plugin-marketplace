from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MergeStrategy1(str, Enum):
    """The strategy used to merge existing bot or bot locale definitions with the imported definition."""

    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"
    APPEND = "Append"

    __str__ = str.__str__


MergeStrategy1OrStr: TypeAlias = Annotated[MergeStrategy1 | str, open_enum_validator(MergeStrategy1)]
