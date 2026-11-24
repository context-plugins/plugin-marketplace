from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnprocessedStatistics(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule."""

    error_code: Optional[str] = Field(default=UNSET, alias="ErrorCode")
    """The error code."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """The error message."""


class UnprocessedStatisticsDict(TypedDict):
    rule_name: NotRequired[str]
    error_code: NotRequired[str]
    message: NotRequired[str]
