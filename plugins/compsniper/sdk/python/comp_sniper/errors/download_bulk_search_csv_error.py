from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

DownloadBulkSearchCsvErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _DownloadBulkSearchCsvError:
    def map(self, status_code: int, content: bytes) -> DownloadBulkSearchCsvErrorBody:
        match status_code:
            case 400 | 401 | 404 | 409:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


download_bulk_search_csv_error_mapper: Final[
    ErrorMapper[DownloadBulkSearchCsvErrorBody]
] = _DownloadBulkSearchCsvError()
