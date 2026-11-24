from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """The input does not satisfy the constraints specified by an Amazon Web Services service."""

    API_DOES_NOT_SUPPORT_LABELED_ARNS = "API_DOES_NOT_SUPPORT_LABELED_ARNS"
    MISSING_REQUIRED_PARAMETER = "MISSING_REQUIRED_PARAMETER"
    CANNOT_UPDATE_COMPLETED_MAP_RUN = "CANNOT_UPDATE_COMPLETED_MAP_RUN"
    INVALID_ROUTING_CONFIGURATION = "INVALID_ROUTING_CONFIGURATION"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
