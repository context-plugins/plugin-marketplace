from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RetrieveTapeArchive2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RetrieveTapeArchive2Error:
    def map(self, status_code: int, content: bytes) -> RetrieveTapeArchive2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


retrieve_tape_archive2_error_mapper: Final[ErrorMapper[RetrieveTapeArchive2ErrorBody]] = _RetrieveTapeArchive2Error()
