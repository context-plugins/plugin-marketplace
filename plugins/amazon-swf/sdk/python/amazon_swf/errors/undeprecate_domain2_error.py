from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UndeprecateDomain2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UndeprecateDomain2Error:
    def map(self, status_code: int, content: bytes) -> UndeprecateDomain2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


undeprecate_domain2_error_mapper: Final[ErrorMapper[UndeprecateDomain2ErrorBody]] = _UndeprecateDomain2Error()
