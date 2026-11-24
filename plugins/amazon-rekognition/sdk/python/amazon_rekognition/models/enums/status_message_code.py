from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusMessageCode(str, Enum):
    """The status message code for the dataset operation. If a service error occurs, try the API call again later. If a
    client error occurs, check the input parameters to the dataset API call that failed."""

    SUCCESS = "SUCCESS"
    SERVICE_ERROR = "SERVICE_ERROR"
    CLIENT_ERROR = "CLIENT_ERROR"

    __str__ = str.__str__


StatusMessageCodeOrStr: TypeAlias = Annotated[StatusMessageCode | str, open_enum_validator(StatusMessageCode)]
