from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocateConnectionOnInterconnect2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocateConnectionOnInterconnect2Error:
    def map(self, status_code: int, content: bytes) -> AllocateConnectionOnInterconnect2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_connection_on_interconnect2_error_mapper: Final[
    ErrorMapper[AllocateConnectionOnInterconnect2ErrorBody]
] = _AllocateConnectionOnInterconnect2Error()
