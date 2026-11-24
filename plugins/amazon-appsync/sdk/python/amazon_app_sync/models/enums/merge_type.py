from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MergeType(str, Enum):
    """The property that indicates which merging option is enabled in the source API association. Valid merge types are
    MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default behavior and require the user to trigger any
    changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes
    performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use
    MergedApiExecutionRoleArn to perform merge operations."""

    MANUAL_MERGE = "MANUAL_MERGE"
    AUTO_MERGE = "AUTO_MERGE"

    __str__ = str.__str__


MergeTypeOrStr: TypeAlias = Annotated[MergeType | str, open_enum_validator(MergeType)]
