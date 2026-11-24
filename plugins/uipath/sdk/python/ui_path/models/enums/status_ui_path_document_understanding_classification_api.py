from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathDocumentUnderstandingClassificationApi(str, Enum):
    """Current status of the classification job"""

    NOT_STARTED = "NotStarted"
    RUNNING = "Running"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

    __str__ = str.__str__


StatusUiPathDocumentUnderstandingClassificationApiOrStr: TypeAlias = Annotated[
    StatusUiPathDocumentUnderstandingClassificationApi | str,
    open_enum_validator(StatusUiPathDocumentUnderstandingClassificationApi),
]
