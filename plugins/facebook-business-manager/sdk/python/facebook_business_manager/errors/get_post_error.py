from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPostErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPostError:
    def map(self, status_code: int, content: bytes) -> GetPostErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_post_error_mapper: Final[ErrorMapper[GetPostErrorBody]] = _GetPostError()
