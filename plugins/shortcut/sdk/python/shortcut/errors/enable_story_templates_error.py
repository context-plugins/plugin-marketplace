from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

EnableStoryTemplatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _EnableStoryTemplatesError:
    def map(self, status_code: int, content: bytes) -> EnableStoryTemplatesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


enable_story_templates_error_mapper: Final[ErrorMapper[EnableStoryTemplatesErrorBody]] = _EnableStoryTemplatesError()
