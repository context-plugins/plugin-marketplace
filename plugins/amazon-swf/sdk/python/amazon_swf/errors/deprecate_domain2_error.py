from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeprecateDomain2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeprecateDomain2Error:
    def map(self, status_code: int, content: bytes) -> DeprecateDomain2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


deprecate_domain2_error_mapper: Final[ErrorMapper[DeprecateDomain2ErrorBody]] = _DeprecateDomain2Error()
