from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricDoiTDataHubApi(SdkBaseModel):
    value: Optional[float] = UNSET
    """The value of the metric."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of the metric. If you choose "cost" or "usage", it will map to the basic "Cost" or "Usage" metric in
    Cloud Analytics reports. You can also use this field to define custom metric types, such as "working_hours", "ride",
    etc."""


class MetricDoiTDataHubApiDict(TypedDict):
    value: NotRequired[float]
    type_: NotRequired[str]
