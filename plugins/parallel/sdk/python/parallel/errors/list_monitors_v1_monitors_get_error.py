from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListMonitorsV1MonitorsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListMonitorsV1MonitorsGetError:
    def map(self, status_code: int, content: bytes) -> ListMonitorsV1MonitorsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_monitors_v1_monitors_get_error_mapper: Final[
    ErrorMapper[ListMonitorsV1MonitorsGetErrorBody]
] = _ListMonitorsV1MonitorsGetError()
