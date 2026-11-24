from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateTransitVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateTransitVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> CreateTransitVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_transit_virtual_interface_error_mapper: Final[
    ErrorMapper[CreateTransitVirtualInterfaceErrorBody]
] = _CreateTransitVirtualInterfaceError()
