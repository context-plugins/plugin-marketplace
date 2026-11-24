from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeLoaErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeLoaError:
    def map(self, status_code: int, content: bytes) -> DescribeLoaErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_loa_error_mapper: Final[ErrorMapper[DescribeLoaErrorBody]] = _DescribeLoaError()
