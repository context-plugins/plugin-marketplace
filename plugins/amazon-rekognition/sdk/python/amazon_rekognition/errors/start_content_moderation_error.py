from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartContentModerationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartContentModerationError:
    def map(self, status_code: int, content: bytes) -> StartContentModerationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_content_moderation_error_mapper: Final[
    ErrorMapper[StartContentModerationErrorBody]
] = _StartContentModerationError()
