from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetFileError:
    def map(self, status_code: int, content: bytes) -> GetFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_file_error_mapper: Final[ErrorMapper[GetFileErrorBody]] = _GetFileError()
