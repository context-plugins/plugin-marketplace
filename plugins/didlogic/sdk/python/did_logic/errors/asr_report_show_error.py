from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.unions.api_v1_asr_report_response1 import ApiV1AsrReportResponse1

AsrReportShowErrorBody: TypeAlias = Error | ApiV1AsrReportResponse1 | RawError


@dataclass(frozen=True, slots=True)
class _AsrReportShowError:
    def map(self, status_code: int, content: bytes) -> AsrReportShowErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case 403:
                return decode_json[ApiV1AsrReportResponse1](content)
            case _:
                return RawError(status_code, content)


asr_report_show_error_mapper: Final[ErrorMapper[AsrReportShowErrorBody]] = _AsrReportShowError()
