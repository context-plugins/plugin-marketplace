from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusContentstackLaunchDeploymentsApi(str, Enum):
    """Current status of the deployment."""

    QUEUED = "queued"
    BUILDING = "building"
    DEPLOYING = "deploying"
    LIVE = "live"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusContentstackLaunchDeploymentsApiOrStr: TypeAlias = Annotated[
    StatusContentstackLaunchDeploymentsApi | str, open_enum_validator(StatusContentstackLaunchDeploymentsApi)
]
