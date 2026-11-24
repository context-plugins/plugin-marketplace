from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeSubnetsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeSubnetsError:
    def map(self, status_code: int, content: bytes) -> DescribeSubnetsErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_subnets_error_mapper: Final[ErrorMapper[DescribeSubnetsErrorBody]] = _DescribeSubnetsError()
