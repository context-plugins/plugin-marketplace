from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeConnectionsOnInterconnectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeConnectionsOnInterconnectError:
    def map(self, status_code: int, content: bytes) -> DescribeConnectionsOnInterconnectErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_connections_on_interconnect_error_mapper: Final[
    ErrorMapper[DescribeConnectionsOnInterconnectErrorBody]
] = _DescribeConnectionsOnInterconnectError()
