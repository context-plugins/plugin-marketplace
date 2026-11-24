from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocateConnectionOnInterconnectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocateConnectionOnInterconnectError:
    def map(self, status_code: int, content: bytes) -> AllocateConnectionOnInterconnectErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_connection_on_interconnect_error_mapper: Final[
    ErrorMapper[AllocateConnectionOnInterconnectErrorBody]
] = _AllocateConnectionOnInterconnectError()
