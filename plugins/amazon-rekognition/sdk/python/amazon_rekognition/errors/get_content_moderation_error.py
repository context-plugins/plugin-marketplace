from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetContentModerationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetContentModerationError:
    def map(self, status_code: int, content: bytes) -> GetContentModerationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_content_moderation_error_mapper: Final[ErrorMapper[GetContentModerationErrorBody]] = _GetContentModerationError()
