from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateCommentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateCommentError:
    def map(self, status_code: int, content: bytes) -> CreateCommentErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_comment_error_mapper: Final[ErrorMapper[CreateCommentErrorBody]] = _CreateCommentError()
