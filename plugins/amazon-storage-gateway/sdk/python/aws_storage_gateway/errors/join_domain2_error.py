from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

JoinDomain2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _JoinDomain2Error:
    def map(self, status_code: int, content: bytes) -> JoinDomain2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


join_domain2_error_mapper: Final[ErrorMapper[JoinDomain2ErrorBody]] = _JoinDomain2Error()
