from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteTapeArchiveErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteTapeArchiveError:
    def map(self, status_code: int, content: bytes) -> DeleteTapeArchiveErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_tape_archive_error_mapper: Final[ErrorMapper[DeleteTapeArchiveErrorBody]] = _DeleteTapeArchiveError()
