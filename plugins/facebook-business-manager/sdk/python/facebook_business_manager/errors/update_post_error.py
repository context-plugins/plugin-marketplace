from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdatePostErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdatePostError:
    def map(self, status_code: int, content: bytes) -> UpdatePostErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_post_error_mapper: Final[ErrorMapper[UpdatePostErrorBody]] = _UpdatePostError()
