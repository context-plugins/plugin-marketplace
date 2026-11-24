from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeTapeArchivesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeTapeArchivesError:
    def map(self, status_code: int, content: bytes) -> DescribeTapeArchivesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_tape_archives_error_mapper: Final[ErrorMapper[DescribeTapeArchivesErrorBody]] = _DescribeTapeArchivesError()
