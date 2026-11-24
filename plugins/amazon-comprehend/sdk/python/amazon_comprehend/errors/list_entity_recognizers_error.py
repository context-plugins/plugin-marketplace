from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEntityRecognizersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEntityRecognizersError:
    def map(self, status_code: int, content: bytes) -> ListEntityRecognizersErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_entity_recognizers_error_mapper: Final[ErrorMapper[ListEntityRecognizersErrorBody]] = _ListEntityRecognizersError()
