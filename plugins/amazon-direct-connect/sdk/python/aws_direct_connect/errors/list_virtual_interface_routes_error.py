from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVirtualInterfaceRoutesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVirtualInterfaceRoutesError:
    def map(self, status_code: int, content: bytes) -> ListVirtualInterfaceRoutesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_virtual_interface_routes_error_mapper: Final[
    ErrorMapper[ListVirtualInterfaceRoutesErrorBody]
] = _ListVirtualInterfaceRoutesError()
