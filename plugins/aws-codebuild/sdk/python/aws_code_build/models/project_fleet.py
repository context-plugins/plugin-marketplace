from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectFleet(SdkBaseModel):
    fleet_arn: Optional[str] = Field(default=UNSET, alias="fleetArn")
    """Specifies the compute fleet ARN for the build project."""


class ProjectFleetDict(TypedDict):
    fleet_arn: NotRequired[str]
