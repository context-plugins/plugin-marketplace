from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmPrivateVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmPrivateVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> ConfirmPrivateVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_private_virtual_interface_error_mapper: Final[
    ErrorMapper[ConfirmPrivateVirtualInterfaceErrorBody]
] = _ConfirmPrivateVirtualInterfaceError()
