from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteCollectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteCollectionError:
    def map(self, status_code: int, content: bytes) -> DeleteCollectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_collection_error_mapper: Final[ErrorMapper[DeleteCollectionErrorBody]] = _DeleteCollectionError()
