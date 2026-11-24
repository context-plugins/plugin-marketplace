from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ActivateMonitorApiErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ActivateMonitorApiError:
    def map(self, status_code: int, content: bytes) -> ActivateMonitorApiErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


activate_monitor_api_error_mapper: Final[ErrorMapper[ActivateMonitorApiErrorBody]] = _ActivateMonitorApiError()
