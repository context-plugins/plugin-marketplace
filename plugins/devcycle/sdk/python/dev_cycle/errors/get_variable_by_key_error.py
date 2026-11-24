from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetVariableByKeyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetVariableByKeyError:
    def map(self, status_code: int, content: bytes) -> GetVariableByKeyErrorBody:
        match status_code:
            case 400 | 401 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_variable_by_key_error_mapper: Final[ErrorMapper[GetVariableByKeyErrorBody]] = _GetVariableByKeyError()
