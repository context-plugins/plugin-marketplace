from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

BenchmarksBenchmarksGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _BenchmarksBenchmarksGetError:
    def map(self, status_code: int, content: bytes) -> BenchmarksBenchmarksGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


benchmarks_benchmarks_get_error_mapper: Final[
    ErrorMapper[BenchmarksBenchmarksGetErrorBody]
] = _BenchmarksBenchmarksGetError()
