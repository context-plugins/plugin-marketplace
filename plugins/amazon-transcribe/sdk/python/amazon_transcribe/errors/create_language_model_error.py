from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateLanguageModelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateLanguageModelError:
    def map(self, status_code: int, content: bytes) -> CreateLanguageModelErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_language_model_error_mapper: Final[ErrorMapper[CreateLanguageModelErrorBody]] = _CreateLanguageModelError()
