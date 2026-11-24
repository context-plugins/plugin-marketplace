from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAfter(str, Enum):
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    POSTED = "POSTED"
    ERROR = "ERROR"
    DELETED = "DELETED"
    PROCESSING = "PROCESSING"
    REVIEW = "REVIEW"
    RETRYING = "RETRYING"

    __str__ = str.__str__


StatusAfterOrStr: TypeAlias = Annotated[StatusAfter | str, open_enum_validator(StatusAfter)]
