from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceApiAssociationStatus(str, Enum):
    """The state of the source API association."""

    MERGE_SCHEDULED = "MERGE_SCHEDULED"
    MERGE_FAILED = "MERGE_FAILED"
    MERGE_SUCCESS = "MERGE_SUCCESS"
    MERGE_IN_PROGRESS = "MERGE_IN_PROGRESS"
    AUTO_MERGE_SCHEDULE_FAILED = "AUTO_MERGE_SCHEDULE_FAILED"
    DELETION_SCHEDULED = "DELETION_SCHEDULED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"
    DELETION_FAILED = "DELETION_FAILED"

    __str__ = str.__str__


SourceApiAssociationStatusOrStr: TypeAlias = Annotated[
    SourceApiAssociationStatus | str, open_enum_validator(SourceApiAssociationStatus)
]
