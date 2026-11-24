from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVirtualInterfaceTestHistoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVirtualInterfaceTestHistoryError:
    def map(self, status_code: int, content: bytes) -> ListVirtualInterfaceTestHistoryErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_virtual_interface_test_history_error_mapper: Final[
    ErrorMapper[ListVirtualInterfaceTestHistoryErrorBody]
] = _ListVirtualInterfaceTestHistoryError()
