from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateFileSystemAssociationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateFileSystemAssociationError:
    def map(self, status_code: int, content: bytes) -> UpdateFileSystemAssociationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_file_system_association_error_mapper: Final[
    ErrorMapper[UpdateFileSystemAssociationErrorBody]
] = _UpdateFileSystemAssociationError()
