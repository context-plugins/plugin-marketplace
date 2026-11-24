from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmPublicVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmPublicVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> ConfirmPublicVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_public_virtual_interface_error_mapper: Final[
    ErrorMapper[ConfirmPublicVirtualInterfaceErrorBody]
] = _ConfirmPublicVirtualInterfaceError()
