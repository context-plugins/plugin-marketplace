from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeActivityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeActivityError:
    def map(self, status_code: int, content: bytes) -> DescribeActivityErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_activity_error_mapper: Final[ErrorMapper[DescribeActivityErrorBody]] = _DescribeActivityError()
