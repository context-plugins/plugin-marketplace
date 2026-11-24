from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validation_exception1 import ValidationException1

ContactsStoreErrorBody: TypeAlias = ValidationException1 | RawError


@dataclass(frozen=True, slots=True)
class _ContactsStoreError:
    def map(self, status_code: int, content: bytes) -> ContactsStoreErrorBody:
        match status_code:
            case 422:
                return decode_json[ValidationException1](content)
            case _:
                return RawError(status_code, content)


contacts_store_error_mapper: Final[ErrorMapper[ContactsStoreErrorBody]] = _ContactsStoreError()
