from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathDocumentUnderstandingExtractionApi(str, Enum):
    """Initial status of the asynchronous job"""

    NOT_STARTED = "NotStarted"
    RUNNING = "Running"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

    __str__ = str.__str__


StatusUiPathDocumentUnderstandingExtractionApiOrStr: TypeAlias = Annotated[
    StatusUiPathDocumentUnderstandingExtractionApi | str,
    open_enum_validator(StatusUiPathDocumentUnderstandingExtractionApi),
]
