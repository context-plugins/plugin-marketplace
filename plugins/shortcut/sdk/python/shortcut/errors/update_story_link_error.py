from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateStoryLinkErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateStoryLinkError:
    def map(self, status_code: int, content: bytes) -> UpdateStoryLinkErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_story_link_error_mapper: Final[ErrorMapper[UpdateStoryLinkErrorBody]] = _UpdateStoryLinkError()
