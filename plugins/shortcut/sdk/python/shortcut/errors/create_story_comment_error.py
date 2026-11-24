from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStoryCommentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStoryCommentError:
    def map(self, status_code: int, content: bytes) -> CreateStoryCommentErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_story_comment_error_mapper: Final[ErrorMapper[CreateStoryCommentErrorBody]] = _CreateStoryCommentError()
