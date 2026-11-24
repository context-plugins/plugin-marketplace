from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SetFormStorageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SetFormStorageError:
    def map(self, status_code: int, content: bytes) -> SetFormStorageErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


set_form_storage_error_mapper: Final[ErrorMapper[SetFormStorageErrorBody]] = _SetFormStorageError()
