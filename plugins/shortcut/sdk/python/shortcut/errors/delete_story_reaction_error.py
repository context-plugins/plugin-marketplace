from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStoryReactionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStoryReactionError:
    def map(self, status_code: int, content: bytes) -> DeleteStoryReactionErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_story_reaction_error_mapper: Final[ErrorMapper[DeleteStoryReactionErrorBody]] = _DeleteStoryReactionError()
