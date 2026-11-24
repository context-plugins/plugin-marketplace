from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAcmeEndpointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAcmeEndpointError:
    def map(self, status_code: int, content: bytes) -> DescribeAcmeEndpointErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_acme_endpoint_error_mapper: Final[ErrorMapper[DescribeAcmeEndpointErrorBody]] = _DescribeAcmeEndpointError()
