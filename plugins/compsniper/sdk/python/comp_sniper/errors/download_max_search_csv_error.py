from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DownloadMaxSearchCsvErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DownloadMaxSearchCsvError:
    def map(self, status_code: int, content: bytes) -> DownloadMaxSearchCsvErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


download_max_search_csv_error_mapper: Final[ErrorMapper[DownloadMaxSearchCsvErrorBody]] = _DownloadMaxSearchCsvError()
