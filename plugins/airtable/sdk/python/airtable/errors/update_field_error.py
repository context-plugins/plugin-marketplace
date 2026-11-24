from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateFieldErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateFieldError:
    def map(self, status_code: int, content: bytes) -> UpdateFieldErrorBody:
        match status_code:
            case 401 | 403 | 404 | 422 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_field_error_mapper: Final[ErrorMapper[UpdateFieldErrorBody]] = _UpdateFieldError()
