from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Current onboarding lifecycle stage for this product line."""

    NOT_STARTED = "not_started"
    ONBOARDING = "onboarding"
    DONE = "done"
    ERROR = "error"

    __str__ = str.__str__


StatusDoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    StatusDoiTPerfectScaleForCommitmentsGcpApi | str, open_enum_validator(StatusDoiTPerfectScaleForCommitmentsGcpApi)
]
