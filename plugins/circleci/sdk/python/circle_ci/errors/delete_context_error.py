from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteContextErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteContextError:
    def map(self, status_code: int, content: bytes) -> DeleteContextErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_context_error_mapper: Final[ErrorMapper[DeleteContextErrorBody]] = _DeleteContextError()
