from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReportWithRawData(SdkBaseModel):
    report_arn: Optional[str] = Field(default=UNSET, alias="reportArn")
    """The ARN of the report."""

    data: Optional[str] = UNSET
    """The value of the requested data field from the report."""


class ReportWithRawDataDict(TypedDict):
    report_arn: NotRequired[str]
    data: NotRequired[str]
