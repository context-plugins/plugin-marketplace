from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StateOfMcpTrendV1StateOfMcpTrendGetError:
    def map(self, status_code: int, content: bytes) -> V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error_mapper: Final[
    ErrorMapper[V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody]
] = _V1StateOfMcpTrendV1StateOfMcpTrendGetError()
