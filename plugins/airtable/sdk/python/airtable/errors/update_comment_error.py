from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateCommentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateCommentError:
    def map(self, status_code: int, content: bytes) -> UpdateCommentErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_comment_error_mapper: Final[ErrorMapper[UpdateCommentErrorBody]] = _UpdateCommentError()
