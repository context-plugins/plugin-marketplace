from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDocumentClassifiersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDocumentClassifiersError:
    def map(self, status_code: int, content: bytes) -> ListDocumentClassifiersErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_document_classifiers_error_mapper: Final[
    ErrorMapper[ListDocumentClassifiersErrorBody]
] = _ListDocumentClassifiersError()
