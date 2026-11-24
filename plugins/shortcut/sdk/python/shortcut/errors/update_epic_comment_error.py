from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateEpicCommentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateEpicCommentError:
    def map(self, status_code: int, content: bytes) -> UpdateEpicCommentErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_epic_comment_error_mapper: Final[ErrorMapper[UpdateEpicCommentErrorBody]] = _UpdateEpicCommentError()
