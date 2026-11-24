from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

QueryExecutionRecordsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _QueryExecutionRecordsError:
    def map(self, status_code: int, content: bytes) -> QueryExecutionRecordsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


query_execution_records_error_mapper: Final[ErrorMapper[QueryExecutionRecordsErrorBody]] = _QueryExecutionRecordsError()
