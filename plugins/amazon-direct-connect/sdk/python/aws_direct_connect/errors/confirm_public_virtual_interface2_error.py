from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmPublicVirtualInterface2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmPublicVirtualInterface2Error:
    def map(self, status_code: int, content: bytes) -> ConfirmPublicVirtualInterface2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_public_virtual_interface2_error_mapper: Final[
    ErrorMapper[ConfirmPublicVirtualInterface2ErrorBody]
] = _ConfirmPublicVirtualInterface2Error()
