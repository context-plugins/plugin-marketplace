from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RunFunnelReportErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RunFunnelReportError:
    def map(self, status_code: int, content: bytes) -> RunFunnelReportErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


run_funnel_report_error_mapper: Final[ErrorMapper[RunFunnelReportErrorBody]] = _RunFunnelReportError()
