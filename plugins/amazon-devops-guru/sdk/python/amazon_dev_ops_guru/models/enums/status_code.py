from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCode(str, Enum):
    """This is an enum of the status showing whether the metric value pair list has partial or complete data, or if
    there was an error."""

    COMPLETE = "Complete"
    INTERNAL_ERROR = "InternalError"
    PARTIAL_DATA = "PartialData"

    __str__ = str.__str__


StatusCodeOrStr: TypeAlias = Annotated[StatusCode | str, open_enum_validator(StatusCode)]
