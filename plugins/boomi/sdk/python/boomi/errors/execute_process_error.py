from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ExecuteProcessErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ExecuteProcessError:
    def map(self, status_code: int, content: bytes) -> ExecuteProcessErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


execute_process_error_mapper: Final[ErrorMapper[ExecuteProcessErrorBody]] = _ExecuteProcessError()
