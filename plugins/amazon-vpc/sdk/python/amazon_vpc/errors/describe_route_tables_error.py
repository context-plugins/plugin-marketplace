from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeRouteTablesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeRouteTablesError:
    def map(self, status_code: int, content: bytes) -> DescribeRouteTablesErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_route_tables_error_mapper: Final[ErrorMapper[DescribeRouteTablesErrorBody]] = _DescribeRouteTablesError()
