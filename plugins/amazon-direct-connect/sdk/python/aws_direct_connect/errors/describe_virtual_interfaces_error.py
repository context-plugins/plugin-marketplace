from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeVirtualInterfacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeVirtualInterfacesError:
    def map(self, status_code: int, content: bytes) -> DescribeVirtualInterfacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_virtual_interfaces_error_mapper: Final[
    ErrorMapper[DescribeVirtualInterfacesErrorBody]
] = _DescribeVirtualInterfacesError()
