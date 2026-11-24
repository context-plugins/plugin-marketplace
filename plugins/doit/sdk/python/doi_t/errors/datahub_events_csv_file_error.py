from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DatahubEventsCsvFileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DatahubEventsCsvFileError:
    def map(self, status_code: int, content: bytes) -> DatahubEventsCsvFileErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


datahub_events_csv_file_error_mapper: Final[ErrorMapper[DatahubEventsCsvFileErrorBody]] = _DatahubEventsCsvFileError()
