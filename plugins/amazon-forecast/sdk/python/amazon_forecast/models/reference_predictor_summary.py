from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class ReferencePredictorSummary(SdkBaseModel):
    arn: Optional[str] = Field(default=UNSET, alias="Arn")
    """The ARN of the reference predictor."""

    state: Optional[StateOrStr] = Field(default=UNSET, alias="State")
    """Whether the reference predictor is Active or Deleted."""


class ReferencePredictorSummaryDict(TypedDict):
    arn: NotRequired[str]
    state: NotRequired[StateOrStr]
