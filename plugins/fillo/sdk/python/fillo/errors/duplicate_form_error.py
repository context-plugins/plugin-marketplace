from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DuplicateFormErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DuplicateFormError:
    def map(self, status_code: int, content: bytes) -> DuplicateFormErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 410 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


duplicate_form_error_mapper: Final[ErrorMapper[DuplicateFormErrorBody]] = _DuplicateFormError()
