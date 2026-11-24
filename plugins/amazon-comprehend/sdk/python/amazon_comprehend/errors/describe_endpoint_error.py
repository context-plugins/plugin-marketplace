from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeEndpointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeEndpointError:
    def map(self, status_code: int, content: bytes) -> DescribeEndpointErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_endpoint_error_mapper: Final[ErrorMapper[DescribeEndpointErrorBody]] = _DescribeEndpointError()
