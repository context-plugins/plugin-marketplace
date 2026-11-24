from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateVirtualInterfaceAttributesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateVirtualInterfaceAttributesError:
    def map(self, status_code: int, content: bytes) -> UpdateVirtualInterfaceAttributesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_virtual_interface_attributes_error_mapper: Final[
    ErrorMapper[UpdateVirtualInterfaceAttributesErrorBody]
] = _UpdateVirtualInterfaceAttributesError()
