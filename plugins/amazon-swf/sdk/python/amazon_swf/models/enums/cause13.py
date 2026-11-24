from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Cause13(str, Enum):
    """The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading
    up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient
    permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the
    Amazon SWF Developer Guide."""

    ID_ALREADY_IN_USE = "ID_ALREADY_IN_USE"
    OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED = "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED"
    LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED = "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"
    LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION = "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION"

    __str__ = str.__str__


Cause13OrStr: TypeAlias = Annotated[Cause13 | str, open_enum_validator(Cause13)]
