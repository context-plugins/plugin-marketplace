from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocatePrivateVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocatePrivateVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> AllocatePrivateVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_private_virtual_interface_error_mapper: Final[
    ErrorMapper[AllocatePrivateVirtualInterfaceErrorBody]
] = _AllocatePrivateVirtualInterfaceError()
