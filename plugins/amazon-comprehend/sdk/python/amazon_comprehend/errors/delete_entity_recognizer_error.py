from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteEntityRecognizerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteEntityRecognizerError:
    def map(self, status_code: int, content: bytes) -> DeleteEntityRecognizerErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_entity_recognizer_error_mapper: Final[
    ErrorMapper[DeleteEntityRecognizerErrorBody]
] = _DeleteEntityRecognizerError()
