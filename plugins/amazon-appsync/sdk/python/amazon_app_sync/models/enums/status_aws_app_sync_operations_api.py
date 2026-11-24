from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsAppSyncOperationsApi(str, Enum):
    """The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the
    ACTIVE state, you can add data."""

    PROCESSING = "PROCESSING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"
    NOT_APPLICABLE = "NOT_APPLICABLE"

    __str__ = str.__str__


StatusAwsAppSyncOperationsApiOrStr: TypeAlias = Annotated[
    StatusAwsAppSyncOperationsApi | str, open_enum_validator(StatusAwsAppSyncOperationsApi)
]
