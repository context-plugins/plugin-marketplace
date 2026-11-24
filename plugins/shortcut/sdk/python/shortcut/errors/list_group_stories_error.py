from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListGroupStoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListGroupStoriesError:
    def map(self, status_code: int, content: bytes) -> ListGroupStoriesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_group_stories_error_mapper: Final[ErrorMapper[ListGroupStoriesErrorBody]] = _ListGroupStoriesError()
