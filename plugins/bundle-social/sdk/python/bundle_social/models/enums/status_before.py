from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBefore(str, Enum):
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    POSTED = "POSTED"
    ERROR = "ERROR"
    DELETED = "DELETED"
    PROCESSING = "PROCESSING"
    REVIEW = "REVIEW"
    RETRYING = "RETRYING"

    __str__ = str.__str__


StatusBeforeOrStr: TypeAlias = Annotated[StatusBefore | str, open_enum_validator(StatusBefore)]
