from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RecordOutcomeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RecordOutcomeError:
    def map(self, status_code: int, content: bytes) -> RecordOutcomeErrorBody:
        match status_code:
            case 400 | 401 | 404 | 410:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


record_outcome_error_mapper: Final[ErrorMapper[RecordOutcomeErrorBody]] = _RecordOutcomeError()
