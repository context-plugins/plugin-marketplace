from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateFileError:
    def map(self, status_code: int, content: bytes) -> UpdateFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_file_error_mapper: Final[ErrorMapper[UpdateFileErrorBody]] = _UpdateFileError()
