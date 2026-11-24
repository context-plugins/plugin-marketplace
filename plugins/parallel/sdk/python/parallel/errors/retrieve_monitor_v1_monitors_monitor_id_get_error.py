from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

RetrieveMonitorV1MonitorsMonitorIdGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RetrieveMonitorV1MonitorsMonitorIdGetError:
    def map(self, status_code: int, content: bytes) -> RetrieveMonitorV1MonitorsMonitorIdGetErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


retrieve_monitor_v1_monitors_monitor_id_get_error_mapper: Final[
    ErrorMapper[RetrieveMonitorV1MonitorsMonitorIdGetErrorBody]
] = _RetrieveMonitorV1MonitorsMonitorIdGetError()
