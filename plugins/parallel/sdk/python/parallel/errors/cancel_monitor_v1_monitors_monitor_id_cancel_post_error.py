from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CancelMonitorV1MonitorsMonitorIdCancelPostError:
    def map(self, status_code: int, content: bytes) -> CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


cancel_monitor_v1_monitors_monitor_id_cancel_post_error_mapper: Final[
    ErrorMapper[CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody]
] = _CancelMonitorV1MonitorsMonitorIdCancelPostError()
