from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePrivateVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePrivateVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> CreatePrivateVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_private_virtual_interface_error_mapper: Final[
    ErrorMapper[CreatePrivateVirtualInterfaceErrorBody]
] = _CreatePrivateVirtualInterfaceError()
