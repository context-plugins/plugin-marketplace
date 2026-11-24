from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeFlywheelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeFlywheelError:
    def map(self, status_code: int, content: bytes) -> DescribeFlywheelErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_flywheel_error_mapper: Final[ErrorMapper[DescribeFlywheelErrorBody]] = _DescribeFlywheelError()
