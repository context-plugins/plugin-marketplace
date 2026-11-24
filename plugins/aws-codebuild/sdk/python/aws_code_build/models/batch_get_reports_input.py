from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetReportsInput(SdkBaseModel):
    report_arns: list[str] = Field(alias="reportArns")
    """An array of ARNs that identify the Report objects to return."""


class BatchGetReportsInputDict(TypedDict):
    report_arns: list[str]
