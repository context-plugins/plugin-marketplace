from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocateTransitVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocateTransitVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> AllocateTransitVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_transit_virtual_interface_error_mapper: Final[
    ErrorMapper[AllocateTransitVirtualInterfaceErrorBody]
] = _AllocateTransitVirtualInterfaceError()
