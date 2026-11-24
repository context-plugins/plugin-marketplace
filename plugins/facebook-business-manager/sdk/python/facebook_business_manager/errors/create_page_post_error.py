from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePagePostErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePagePostError:
    def map(self, status_code: int, content: bytes) -> CreatePagePostErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_page_post_error_mapper: Final[ErrorMapper[CreatePagePostErrorBody]] = _CreatePagePostError()
