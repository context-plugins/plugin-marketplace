from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError:
    def map(self, status_code: int, content: bytes) -> TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error_mapper: Final[
    ErrorMapper[TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody]
] = _TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError()
