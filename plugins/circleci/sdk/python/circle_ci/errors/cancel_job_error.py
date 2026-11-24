from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CancelJobErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CancelJobError:
    def map(self, status_code: int, content: bytes) -> CancelJobErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


cancel_job_error_mapper: Final[ErrorMapper[CancelJobErrorBody]] = _CancelJobError()
