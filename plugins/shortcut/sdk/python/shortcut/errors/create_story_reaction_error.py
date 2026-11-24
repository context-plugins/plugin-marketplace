from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStoryReactionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStoryReactionError:
    def map(self, status_code: int, content: bytes) -> CreateStoryReactionErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_story_reaction_error_mapper: Final[ErrorMapper[CreateStoryReactionErrorBody]] = _CreateStoryReactionError()
