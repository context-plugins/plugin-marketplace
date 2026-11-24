from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmTransitVirtualInterface2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmTransitVirtualInterface2Error:
    def map(self, status_code: int, content: bytes) -> ConfirmTransitVirtualInterface2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_transit_virtual_interface2_error_mapper: Final[
    ErrorMapper[ConfirmTransitVirtualInterface2ErrorBody]
] = _ConfirmTransitVirtualInterface2Error()
