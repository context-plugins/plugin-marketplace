from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeNatGatewaysErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeNatGatewaysError:
    def map(self, status_code: int, content: bytes) -> DescribeNatGatewaysErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_nat_gateways_error_mapper: Final[ErrorMapper[DescribeNatGatewaysErrorBody]] = _DescribeNatGatewaysError()
