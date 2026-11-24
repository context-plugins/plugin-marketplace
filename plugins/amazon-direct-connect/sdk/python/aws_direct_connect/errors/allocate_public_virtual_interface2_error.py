from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AllocatePublicVirtualInterface2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AllocatePublicVirtualInterface2Error:
    def map(self, status_code: int, content: bytes) -> AllocatePublicVirtualInterface2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


allocate_public_virtual_interface2_error_mapper: Final[
    ErrorMapper[AllocatePublicVirtualInterface2ErrorBody]
] = _AllocatePublicVirtualInterface2Error()
