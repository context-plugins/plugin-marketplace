from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BaselineMetric(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the metric."""

    value: Optional[float] = Field(default=UNSET, alias="Value")
    """The value for the metric."""


class BaselineMetricDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[float]
