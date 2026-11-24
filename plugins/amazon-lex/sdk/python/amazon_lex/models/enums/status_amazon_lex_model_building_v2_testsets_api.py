from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """The status of the test set."""

    IMPORTING = "Importing"
    PENDING_ANNOTATION = "PendingAnnotation"
    DELETING = "Deleting"
    VALIDATION_ERROR = "ValidationError"
    READY = "Ready"

    __str__ = str.__str__


StatusAmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    StatusAmazonLexModelBuildingV2TestsetsApi | str, open_enum_validator(StatusAmazonLexModelBuildingV2TestsetsApi)
]
