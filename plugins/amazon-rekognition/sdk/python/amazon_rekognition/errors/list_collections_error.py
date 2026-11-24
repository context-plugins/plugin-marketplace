from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCollectionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCollectionsError:
    def map(self, status_code: int, content: bytes) -> ListCollectionsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_collections_error_mapper: Final[ErrorMapper[ListCollectionsErrorBody]] = _ListCollectionsError()
