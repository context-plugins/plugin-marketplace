from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCustomerMetadataErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCustomerMetadataError:
    def map(self, status_code: int, content: bytes) -> DescribeCustomerMetadataErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_customer_metadata_error_mapper: Final[
    ErrorMapper[DescribeCustomerMetadataErrorBody]
] = _DescribeCustomerMetadataError()
