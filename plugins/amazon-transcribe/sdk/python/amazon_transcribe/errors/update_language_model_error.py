from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateLanguageModelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateLanguageModelError:
    def map(self, status_code: int, content: bytes) -> UpdateLanguageModelErrorBody:
        match status_code:
            case 400 | 404 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_language_model_error_mapper: Final[ErrorMapper[UpdateLanguageModelErrorBody]] = _UpdateLanguageModelError()
