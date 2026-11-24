from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisableStoryTemplatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisableStoryTemplatesError:
    def map(self, status_code: int, content: bytes) -> DisableStoryTemplatesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disable_story_templates_error_mapper: Final[ErrorMapper[DisableStoryTemplatesErrorBody]] = _DisableStoryTemplatesError()
