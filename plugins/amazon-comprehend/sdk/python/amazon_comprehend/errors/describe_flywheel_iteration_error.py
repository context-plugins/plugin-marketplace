from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeFlywheelIterationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeFlywheelIterationError:
    def map(self, status_code: int, content: bytes) -> DescribeFlywheelIterationErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_flywheel_iteration_error_mapper: Final[
    ErrorMapper[DescribeFlywheelIterationErrorBody]
] = _DescribeFlywheelIterationError()
