from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeVpcsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeVpcsError:
    def map(self, status_code: int, content: bytes) -> DescribeVpcsErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_vpcs_error_mapper: Final[ErrorMapper[DescribeVpcsErrorBody]] = _DescribeVpcsError()
