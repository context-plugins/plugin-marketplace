from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPipelineTestReportTestCaseReasonsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineTestReportTestCaseReasonsError:
    def map(self, status_code: int, content: bytes) -> GetPipelineTestReportTestCaseReasonsErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pipeline_test_report_test_case_reasons_error_mapper: Final[
    ErrorMapper[GetPipelineTestReportTestCaseReasonsErrorBody]
] = _GetPipelineTestReportTestCaseReasonsError()
