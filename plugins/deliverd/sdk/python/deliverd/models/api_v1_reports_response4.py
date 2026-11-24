from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audience import Audience, AudienceDict
from .report import Report, ReportDict


class ApiV1ReportsResponse4(SdkBaseModel):
    report: Report
    audience: list[Audience]


class ApiV1ReportsResponse4Dict(TypedDict):
    report: ReportDict
    audience: list[AudienceDict]
