from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMultipleStoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMultipleStoriesError:
    def map(self, status_code: int, content: bytes) -> DeleteMultipleStoriesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_multiple_stories_error_mapper: Final[ErrorMapper[DeleteMultipleStoriesErrorBody]] = _DeleteMultipleStoriesError()
