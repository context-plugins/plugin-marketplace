from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeConnectionLoaErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeConnectionLoaError:
    def map(self, status_code: int, content: bytes) -> DescribeConnectionLoaErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_connection_loa_error_mapper: Final[ErrorMapper[DescribeConnectionLoaErrorBody]] = _DescribeConnectionLoaError()
