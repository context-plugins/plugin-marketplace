from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeGatewayInformation2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeGatewayInformation2Error:
    def map(self, status_code: int, content: bytes) -> DescribeGatewayInformation2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_gateway_information2_error_mapper: Final[
    ErrorMapper[DescribeGatewayInformation2ErrorBody]
] = _DescribeGatewayInformation2Error()
