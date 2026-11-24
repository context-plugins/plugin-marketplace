from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1UiPathDocumentUnderstandingExtractionApi(str, Enum):
    """Current status of the extraction job"""

    NOT_STARTED = "NotStarted"
    RUNNING = "Running"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

    __str__ = str.__str__


Status1UiPathDocumentUnderstandingExtractionApiOrStr: TypeAlias = Annotated[
    Status1UiPathDocumentUnderstandingExtractionApi | str,
    open_enum_validator(Status1UiPathDocumentUnderstandingExtractionApi),
]
