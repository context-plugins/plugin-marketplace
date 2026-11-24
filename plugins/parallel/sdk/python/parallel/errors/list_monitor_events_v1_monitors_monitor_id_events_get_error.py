from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListMonitorEventsV1MonitorsMonitorIdEventsGetError:
    def map(self, status_code: int, content: bytes) -> ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_monitor_events_v1_monitors_monitor_id_events_get_error_mapper: Final[
    ErrorMapper[ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody]
] = _ListMonitorEventsV1MonitorsMonitorIdEventsGetError()
