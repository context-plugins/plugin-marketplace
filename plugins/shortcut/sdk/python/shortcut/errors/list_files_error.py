from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFilesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFilesError:
    def map(self, status_code: int, content: bytes) -> ListFilesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_files_error_mapper: Final[ErrorMapper[ListFilesErrorBody]] = _ListFilesError()
