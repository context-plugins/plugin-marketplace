from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1BenchmarkHistoryV1BenchmarkHistoryGetError:
    def map(self, status_code: int, content: bytes) -> V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_benchmark_history_v1_benchmark_history_get_error_mapper: Final[
    ErrorMapper[V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody]
] = _V1BenchmarkHistoryV1BenchmarkHistoryGetError()
