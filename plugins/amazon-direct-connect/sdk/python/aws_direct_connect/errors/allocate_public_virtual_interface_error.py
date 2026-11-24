from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocatePublicVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocatePublicVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> AllocatePublicVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_public_virtual_interface_error_mapper: Final[
    ErrorMapper[AllocatePublicVirtualInterfaceErrorBody]
] = _AllocatePublicVirtualInterfaceError()
