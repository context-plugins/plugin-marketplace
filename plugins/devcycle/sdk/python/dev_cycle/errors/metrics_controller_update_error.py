from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse

MetricsControllerUpdateErrorBody: TypeAlias = BadRequestErrorResponse | NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _MetricsControllerUpdateError:
    def map(self, status_code: int, content: bytes) -> MetricsControllerUpdateErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


metrics_controller_update_error_mapper: Final[
    ErrorMapper[MetricsControllerUpdateErrorBody]
] = _MetricsControllerUpdateError()
