from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListObjectTypesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListObjectTypesError:
    def map(self, status_code: int, content: bytes) -> ListObjectTypesErrorBody:
        match status_code:
            case 401 | 402 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_object_types_error_mapper: Final[ErrorMapper[ListObjectTypesErrorBody]] = _ListObjectTypesError()
