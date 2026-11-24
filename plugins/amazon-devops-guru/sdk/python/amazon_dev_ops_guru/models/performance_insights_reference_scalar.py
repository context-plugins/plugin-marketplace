from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PerformanceInsightsReferenceScalar(SdkBaseModel):
    value: Optional[float] = Field(default=UNSET, alias="Value")
    """The reference value."""


class PerformanceInsightsReferenceScalarDict(TypedDict):
    value: NotRequired[float]
