from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RecordingsShowErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RecordingsShowError:
    def map(self, status_code: int, content: bytes) -> RecordingsShowErrorBody:
        match status_code:
            case 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


recordings_show_error_mapper: Final[ErrorMapper[RecordingsShowErrorBody]] = _RecordingsShowError()
