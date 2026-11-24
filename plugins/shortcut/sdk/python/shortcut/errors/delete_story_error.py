from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStoryError:
    def map(self, status_code: int, content: bytes) -> DeleteStoryErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_story_error_mapper: Final[ErrorMapper[DeleteStoryErrorBody]] = _DeleteStoryError()
