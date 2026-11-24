from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStoryFromTemplateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStoryFromTemplateError:
    def map(self, status_code: int, content: bytes) -> CreateStoryFromTemplateErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_story_from_template_error_mapper: Final[
    ErrorMapper[CreateStoryFromTemplateErrorBody]
] = _CreateStoryFromTemplateError()
