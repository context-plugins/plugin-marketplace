from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPipelineTestReportTestCasesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineTestReportTestCasesError:
    def map(self, status_code: int, content: bytes) -> GetPipelineTestReportTestCasesErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pipeline_test_report_test_cases_error_mapper: Final[
    ErrorMapper[GetPipelineTestReportTestCasesErrorBody]
] = _GetPipelineTestReportTestCasesError()
