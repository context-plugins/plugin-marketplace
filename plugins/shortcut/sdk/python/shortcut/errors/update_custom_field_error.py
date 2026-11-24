from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.data_conflict_error import DataConflictError

UpdateCustomFieldErrorBody: TypeAlias = DataConflictError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateCustomFieldError:
    def map(self, status_code: int, content: bytes) -> UpdateCustomFieldErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 409:
                return decode_json[DataConflictError](content)
            case _:
                return RawError(status_code, content)


update_custom_field_error_mapper: Final[ErrorMapper[UpdateCustomFieldErrorBody]] = _UpdateCustomFieldError()
