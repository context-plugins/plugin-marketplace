from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePublicVirtualInterfaceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePublicVirtualInterfaceError:
    def map(self, status_code: int, content: bytes) -> CreatePublicVirtualInterfaceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_public_virtual_interface_error_mapper: Final[
    ErrorMapper[CreatePublicVirtualInterfaceErrorBody]
] = _CreatePublicVirtualInterfaceError()
