from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DownloadRecallsBatchResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DownloadRecallsBatchResultsError:
    def map(self, status_code: int, content: bytes) -> DownloadRecallsBatchResultsErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


download_recalls_batch_results_error_mapper: Final[
    ErrorMapper[DownloadRecallsBatchResultsErrorBody]
] = _DownloadRecallsBatchResultsError()
