from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPipelineTestReportsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineTestReportsError:
    def map(self, status_code: int, content: bytes) -> GetPipelineTestReportsErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pipeline_test_reports_error_mapper: Final[
    ErrorMapper[GetPipelineTestReportsErrorBody]
] = _GetPipelineTestReportsError()
