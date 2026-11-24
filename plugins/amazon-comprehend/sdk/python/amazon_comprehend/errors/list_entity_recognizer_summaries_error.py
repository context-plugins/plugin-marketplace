from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEntityRecognizerSummariesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEntityRecognizerSummariesError:
    def map(self, status_code: int, content: bytes) -> ListEntityRecognizerSummariesErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_entity_recognizer_summaries_error_mapper: Final[
    ErrorMapper[ListEntityRecognizerSummariesErrorBody]
] = _ListEntityRecognizerSummariesError()
