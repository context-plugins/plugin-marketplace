from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

QueryStoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _QueryStoriesError:
    def map(self, status_code: int, content: bytes) -> QueryStoriesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


query_stories_error_mapper: Final[ErrorMapper[QueryStoriesErrorBody]] = _QueryStoriesError()
