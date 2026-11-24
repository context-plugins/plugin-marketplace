from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeTapeRecoveryPointsInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to begin describing the virtual tape recovery points."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the number of virtual tape recovery points that are described be limited to the specified
    number."""


class DescribeTapeRecoveryPointsInputDict(TypedDict):
    gateway_arn: str
    marker: NotRequired[str]
    limit: NotRequired[int]
