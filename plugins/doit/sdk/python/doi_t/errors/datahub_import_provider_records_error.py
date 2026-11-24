from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DatahubImportProviderRecordsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DatahubImportProviderRecordsError:
    def map(self, status_code: int, content: bytes) -> DatahubImportProviderRecordsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


datahub_import_provider_records_error_mapper: Final[
    ErrorMapper[DatahubImportProviderRecordsErrorBody]
] = _DatahubImportProviderRecordsError()
