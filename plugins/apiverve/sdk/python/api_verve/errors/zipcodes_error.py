from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ZipcodesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ZipcodesError:
    def map(self, status_code: int, content: bytes) -> ZipcodesErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


zipcodes_error_mapper: Final[ErrorMapper[ZipcodesErrorBody]] = _ZipcodesError()
