from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDirectConnectGatewayAttachmentsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDirectConnectGatewayAttachmentsError:
    def map(self, status_code: int, content: bytes) -> DescribeDirectConnectGatewayAttachmentsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_direct_connect_gateway_attachments_error_mapper: Final[
    ErrorMapper[DescribeDirectConnectGatewayAttachmentsErrorBody]
] = _DescribeDirectConnectGatewayAttachmentsError()
