from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateEpicCommentCommentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateEpicCommentCommentError:
    def map(self, status_code: int, content: bytes) -> CreateEpicCommentCommentErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_epic_comment_comment_error_mapper: Final[
    ErrorMapper[CreateEpicCommentCommentErrorBody]
] = _CreateEpicCommentCommentError()
