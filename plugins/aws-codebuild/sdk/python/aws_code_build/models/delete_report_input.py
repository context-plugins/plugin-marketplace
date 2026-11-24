from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteReportInput(SdkBaseModel):
    arn: str
    """The ARN of the report to delete."""


class DeleteReportInputDict(TypedDict):
    arn: str
