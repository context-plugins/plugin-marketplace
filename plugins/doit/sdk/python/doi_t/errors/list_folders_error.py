from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListFoldersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListFoldersError:
    def map(self, status_code: int, content: bytes) -> ListFoldersErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_folders_error_mapper: Final[ErrorMapper[ListFoldersErrorBody]] = _ListFoldersError()
