from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudWatchMetricsDimension(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the CloudWatch dimension."""

    value: Optional[str] = Field(default=UNSET, alias="Value")
    """The value of the CloudWatch dimension."""


class CloudWatchMetricsDimensionDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
