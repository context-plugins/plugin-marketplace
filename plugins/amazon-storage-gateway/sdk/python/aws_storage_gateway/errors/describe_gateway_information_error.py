from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeGatewayInformationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeGatewayInformationError:
    def map(self, status_code: int, content: bytes) -> DescribeGatewayInformationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_gateway_information_error_mapper: Final[
    ErrorMapper[DescribeGatewayInformationErrorBody]
] = _DescribeGatewayInformationError()
