from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RecalculateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RecalculateError:
    def map(self, status_code: int, content: bytes) -> RecalculateErrorBody:
        match status_code:
            case 401 | 404 | 422 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


recalculate_error_mapper: Final[ErrorMapper[RecalculateErrorBody]] = _RecalculateError()
