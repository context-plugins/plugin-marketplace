from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmPrivateVirtualInterface2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmPrivateVirtualInterface2Error:
    def map(self, status_code: int, content: bytes) -> ConfirmPrivateVirtualInterface2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_private_virtual_interface2_error_mapper: Final[
    ErrorMapper[ConfirmPrivateVirtualInterface2ErrorBody]
] = _ConfirmPrivateVirtualInterface2Error()
