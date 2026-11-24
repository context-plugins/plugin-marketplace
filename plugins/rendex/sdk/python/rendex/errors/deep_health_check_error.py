from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.deep_health_response import DeepHealthResponse

DeepHealthCheckErrorBody: TypeAlias = DeepHealthResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeepHealthCheckError:
    def map(self, status_code: int, content: bytes) -> DeepHealthCheckErrorBody:
        match status_code:
            case 503:
                return decode_json[DeepHealthResponse](content)
            case _:
                return RawError(status_code, content)


deep_health_check_error_mapper: Final[ErrorMapper[DeepHealthCheckErrorBody]] = _DeepHealthCheckError()
