from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeConnectionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeConnectionsError:
    def map(self, status_code: int, content: bytes) -> DescribeConnectionsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_connections_error_mapper: Final[ErrorMapper[DescribeConnectionsErrorBody]] = _DescribeConnectionsError()
