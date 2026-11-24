from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.throttled_exception import ThrottledException

CancelTraceRetrievalErrorBody: TypeAlias = (
    InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError
)


@dataclass(frozen=True, slots=True)
class _CancelTraceRetrievalError:
    def map(self, status_code: int, content: bytes) -> CancelTraceRetrievalErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


cancel_trace_retrieval_error_mapper: Final[ErrorMapper[CancelTraceRetrievalErrorBody]] = _CancelTraceRetrievalError()
