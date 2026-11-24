from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTPerfectScaleForCommitmentsAwsApi(str, Enum):
    """Current onboarding lifecycle stage for this product line."""

    NOT_STARTED = "not_started"
    ONBOARDING = "onboarding"
    DONE = "done"
    ERROR = "error"

    __str__ = str.__str__


Status1DoiTPerfectScaleForCommitmentsAwsApiOrStr: TypeAlias = Annotated[
    Status1DoiTPerfectScaleForCommitmentsAwsApi | str, open_enum_validator(Status1DoiTPerfectScaleForCommitmentsAwsApi)
]
