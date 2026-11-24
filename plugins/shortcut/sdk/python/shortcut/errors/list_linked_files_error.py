from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListLinkedFilesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListLinkedFilesError:
    def map(self, status_code: int, content: bytes) -> ListLinkedFilesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_linked_files_error_mapper: Final[ErrorMapper[ListLinkedFilesErrorBody]] = _ListLinkedFilesError()
