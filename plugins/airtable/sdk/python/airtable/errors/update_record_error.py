from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateRecordErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateRecordError:
    def map(self, status_code: int, content: bytes) -> UpdateRecordErrorBody:
        match status_code:
            case 401 | 403 | 404 | 422 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_record_error_mapper: Final[ErrorMapper[UpdateRecordErrorBody]] = _UpdateRecordError()
