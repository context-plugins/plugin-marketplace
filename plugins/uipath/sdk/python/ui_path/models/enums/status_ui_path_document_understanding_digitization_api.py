from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathDocumentUnderstandingDigitizationApi(str, Enum):
    """Outcome of the digitization operation"""

    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

    __str__ = str.__str__


StatusUiPathDocumentUnderstandingDigitizationApiOrStr: TypeAlias = Annotated[
    StatusUiPathDocumentUnderstandingDigitizationApi | str,
    open_enum_validator(StatusUiPathDocumentUnderstandingDigitizationApi),
]
