from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.m4001 import M4001

DeleteFolderErrorBody: TypeAlias = M4001 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteFolderError:
    def map(self, status_code: int, content: bytes) -> DeleteFolderErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 410 | 422 | 429 | 500:
                return decode_json[M4001](content)
            case _:
                return RawError(status_code, content)


delete_folder_error_mapper: Final[ErrorMapper[DeleteFolderErrorBody]] = _DeleteFolderError()
