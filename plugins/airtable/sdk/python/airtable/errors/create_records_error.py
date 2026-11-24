from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateRecordsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateRecordsError:
    def map(self, status_code: int, content: bytes) -> CreateRecordsErrorBody:
        match status_code:
            case 401 | 403 | 404 | 422 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_records_error_mapper: Final[ErrorMapper[CreateRecordsErrorBody]] = _CreateRecordsError()
