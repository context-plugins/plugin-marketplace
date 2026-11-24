from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_deliverd_dev_reports_api import ErrorDeliverdDevReportsApi, ErrorDeliverdDevReportsApiDict


class ApiV1ReportsVersions409Error(SdkBaseModel):
    error: ErrorDeliverdDevReportsApi


class ApiV1ReportsVersions409ErrorDict(TypedDict):
    error: ErrorDeliverdDevReportsApiDict
