from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TranslationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TranslationError:
    def map(self, status_code: int, content: bytes) -> TranslationErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


translation_error_mapper: Final[ErrorMapper[TranslationErrorBody]] = _TranslationError()
