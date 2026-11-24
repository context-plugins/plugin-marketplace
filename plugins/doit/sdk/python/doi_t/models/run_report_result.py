from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result_doi_t_reports_api import ResultDoiTReportsApi, ResultDoiTReportsApiDict


class RunReportResult(SdkBaseModel):
    """Results returned when running a report; includes schema and rows."""

    result: Optional[ResultDoiTReportsApi] = UNSET


class RunReportResultDict(TypedDict):
    result: NotRequired[ResultDoiTReportsApiDict]
