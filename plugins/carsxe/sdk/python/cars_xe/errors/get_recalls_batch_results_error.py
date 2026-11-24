from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRecallsBatchResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRecallsBatchResultsError:
    def map(self, status_code: int, content: bytes) -> GetRecallsBatchResultsErrorBody:
        match status_code:
            case 400 | 401 | 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_recalls_batch_results_error_mapper: Final[
    ErrorMapper[GetRecallsBatchResultsErrorBody]
] = _GetRecallsBatchResultsError()
