from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anzsic_reporting_reports_api import AnzsicReportingReportsApi, AnzsicReportingReportsApiDict


class CategoryReportingReportsApi(SdkBaseModel):
    anzsic: Optional[AnzsicReportingReportsApi] = UNSET


class CategoryReportingReportsApiDict(TypedDict):
    anzsic: NotRequired[AnzsicReportingReportsApiDict]
