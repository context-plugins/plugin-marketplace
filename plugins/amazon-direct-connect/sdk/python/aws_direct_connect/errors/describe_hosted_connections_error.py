from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeHostedConnectionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeHostedConnectionsError:
    def map(self, status_code: int, content: bytes) -> DescribeHostedConnectionsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_hosted_connections_error_mapper: Final[
    ErrorMapper[DescribeHostedConnectionsErrorBody]
] = _DescribeHostedConnectionsError()
