from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAsyncOperationResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAsyncOperationResultsError:
    def map(self, status_code: int, content: bytes) -> GetAsyncOperationResultsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 422 | 425 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_async_operation_results_error_mapper: Final[
    ErrorMapper[GetAsyncOperationResultsErrorBody]
] = _GetAsyncOperationResultsError()
