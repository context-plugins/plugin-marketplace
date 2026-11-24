from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeLocationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeLocationsError:
    def map(self, status_code: int, content: bytes) -> DescribeLocationsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_locations_error_mapper: Final[ErrorMapper[DescribeLocationsErrorBody]] = _DescribeLocationsError()
