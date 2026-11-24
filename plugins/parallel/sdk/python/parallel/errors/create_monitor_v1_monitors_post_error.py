from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateMonitorV1MonitorsPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateMonitorV1MonitorsPostError:
    def map(self, status_code: int, content: bytes) -> CreateMonitorV1MonitorsPostErrorBody:
        match status_code:
            case 401 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_monitor_v1_monitors_post_error_mapper: Final[
    ErrorMapper[CreateMonitorV1MonitorsPostErrorBody]
] = _CreateMonitorV1MonitorsPostError()
