from __future__ import annotations

from typing import TypeAlias

from ..api_v1_asr_report_response import ApiV1AsrReportResponse, ApiV1AsrReportResponseDict
from ..error import Error, ErrorDict

ApiV1AsrReportResponse1: TypeAlias = Error | ApiV1AsrReportResponse

ApiV1AsrReportResponse1Dict: TypeAlias = ErrorDict | ApiV1AsrReportResponseDict
