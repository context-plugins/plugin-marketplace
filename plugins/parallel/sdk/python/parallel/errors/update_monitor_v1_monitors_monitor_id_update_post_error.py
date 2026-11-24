from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateMonitorV1MonitorsMonitorIdUpdatePostError:
    def map(self, status_code: int, content: bytes) -> UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_monitor_v1_monitors_monitor_id_update_post_error_mapper: Final[
    ErrorMapper[UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody]
] = _UpdateMonitorV1MonitorsMonitorIdUpdatePostError()
