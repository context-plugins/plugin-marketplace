from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_skribble_additional_information_api import ProblemSkribbleAdditionalInformationApi

GetSkribbleReportErrorBody: TypeAlias = ProblemSkribbleAdditionalInformationApi | RawError


@dataclass(frozen=True, slots=True)
class _GetSkribbleReportError:
    def map(self, status_code: int, content: bytes) -> GetSkribbleReportErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 406 | 429 | 500 | 502 | 503:
                return decode_json[ProblemSkribbleAdditionalInformationApi](content)
            case _:
                return RawError(status_code, content)


get_skribble_report_error_mapper: Final[ErrorMapper[GetSkribbleReportErrorBody]] = _GetSkribbleReportError()
