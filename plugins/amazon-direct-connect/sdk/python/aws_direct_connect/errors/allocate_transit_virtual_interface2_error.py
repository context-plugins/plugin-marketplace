from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocateTransitVirtualInterface2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocateTransitVirtualInterface2Error:
    def map(self, status_code: int, content: bytes) -> AllocateTransitVirtualInterface2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_transit_virtual_interface2_error_mapper: Final[
    ErrorMapper[AllocateTransitVirtualInterface2ErrorBody]
] = _AllocateTransitVirtualInterface2Error()
