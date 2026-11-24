from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

HistoryV1HistoryGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _HistoryV1HistoryGetError:
    def map(self, status_code: int, content: bytes) -> HistoryV1HistoryGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


history_v1_history_get_error_mapper: Final[ErrorMapper[HistoryV1HistoryGetErrorBody]] = _HistoryV1HistoryGetError()
