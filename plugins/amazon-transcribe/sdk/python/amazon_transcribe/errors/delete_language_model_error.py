from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteLanguageModelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteLanguageModelError:
    def map(self, status_code: int, content: bytes) -> DeleteLanguageModelErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_language_model_error_mapper: Final[ErrorMapper[DeleteLanguageModelErrorBody]] = _DeleteLanguageModelError()
