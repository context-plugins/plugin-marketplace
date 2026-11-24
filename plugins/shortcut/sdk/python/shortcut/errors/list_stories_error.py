from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStoriesError:
    def map(self, status_code: int, content: bytes) -> ListStoriesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_stories_error_mapper: Final[ErrorMapper[ListStoriesErrorBody]] = _ListStoriesError()
