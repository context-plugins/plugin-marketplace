from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStoryLinkErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStoryLinkError:
    def map(self, status_code: int, content: bytes) -> CreateStoryLinkErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_story_link_error_mapper: Final[ErrorMapper[CreateStoryLinkErrorBody]] = _CreateStoryLinkError()
