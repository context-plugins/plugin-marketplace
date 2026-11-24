from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UnlinkCommentThreadFromSlackErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UnlinkCommentThreadFromSlackError:
    def map(self, status_code: int, content: bytes) -> UnlinkCommentThreadFromSlackErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


unlink_comment_thread_from_slack_error_mapper: Final[
    ErrorMapper[UnlinkCommentThreadFromSlackErrorBody]
] = _UnlinkCommentThreadFromSlackError()
