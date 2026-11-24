from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListMediaErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListMediaError:
    def map(self, status_code: int, content: bytes) -> ListMediaErrorBody:
        match status_code:
            case 400 | 401 | 402 | 404 | 413 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_media_error_mapper: Final[ErrorMapper[ListMediaErrorBody]] = _ListMediaError()
