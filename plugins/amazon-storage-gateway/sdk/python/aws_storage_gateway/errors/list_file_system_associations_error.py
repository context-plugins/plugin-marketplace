from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFileSystemAssociationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFileSystemAssociationsError:
    def map(self, status_code: int, content: bytes) -> ListFileSystemAssociationsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_file_system_associations_error_mapper: Final[
    ErrorMapper[ListFileSystemAssociationsErrorBody]
] = _ListFileSystemAssociationsError()
