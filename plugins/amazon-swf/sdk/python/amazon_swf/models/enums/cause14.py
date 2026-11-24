from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Cause14(str, Enum):
    """The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading
    up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because the IAM role attached to
    the execution lacked sufficient permissions. For details and example IAM policies, see Lambda Tasks in the Amazon
    SWF Developer Guide."""

    ASSUME_ROLE_FAILED = "ASSUME_ROLE_FAILED"

    __str__ = str.__str__


Cause14OrStr: TypeAlias = Annotated[Cause14 | str, open_enum_validator(Cause14)]
