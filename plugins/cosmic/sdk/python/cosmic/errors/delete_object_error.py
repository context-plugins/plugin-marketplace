from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteObjectErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteObjectError:
    def map(self, status_code: int, content: bytes) -> DeleteObjectErrorBody:
        match status_code:
            case 401 | 402 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_object_error_mapper: Final[ErrorMapper[DeleteObjectErrorBody]] = _DeleteObjectError()
