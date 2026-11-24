from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MergeStrategy(str, Enum):
    """The strategy used when there was a name conflict between the imported resource and an existing resource. When the
    merge strategy is FailOnConflict existing resources are not overwritten and the import fails."""

    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"
    APPEND = "Append"

    __str__ = str.__str__


MergeStrategyOrStr: TypeAlias = Annotated[MergeStrategy | str, open_enum_validator(MergeStrategy)]
