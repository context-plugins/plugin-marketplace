from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SamplingStatisticSummary(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule."""

    timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Timestamp")
    """The start time of the reporting window."""

    request_count: Optional[int] = Field(default=UNSET, alias="RequestCount")
    """The number of requests that matched the rule."""

    borrow_count: Optional[int] = Field(default=UNSET, alias="BorrowCount")
    """The number of requests recorded with borrowed reservoir quota."""

    sampled_count: Optional[int] = Field(default=UNSET, alias="SampledCount")
    """The number of requests recorded."""


class SamplingStatisticSummaryDict(TypedDict):
    rule_name: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    request_count: NotRequired[int]
    borrow_count: NotRequired[int]
    sampled_count: NotRequired[int]
