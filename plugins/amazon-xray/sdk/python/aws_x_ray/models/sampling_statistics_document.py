from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SamplingStatisticsDocument(SdkBaseModel):
    rule_name: str = Field(alias="RuleName")
    """The name of the sampling rule."""

    client_id: str = Field(alias="ClientID")
    """A unique identifier for the service in hexadecimal."""

    timestamp: RFC3339DateTime = Field(alias="Timestamp")
    """The current time."""

    request_count: int = Field(alias="RequestCount")
    """The number of requests that matched the rule."""

    sampled_count: int = Field(alias="SampledCount")
    """The number of requests recorded."""

    borrow_count: Optional[int] = Field(default=UNSET, alias="BorrowCount")
    """The number of requests recorded with borrowed reservoir quota."""


class SamplingStatisticsDocumentDict(TypedDict):
    rule_name: str
    client_id: str
    timestamp: RFC3339DateTime
    request_count: int
    sampled_count: int
    borrow_count: NotRequired[int]
