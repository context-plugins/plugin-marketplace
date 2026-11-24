from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmTransitVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmTransitVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> ConfirmTransitVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_transit_virtual_interface_error_mapper: Final[
    ErrorMapper[ConfirmTransitVirtualInterfaceErrorBody]
] = _ConfirmTransitVirtualInterfaceError()
