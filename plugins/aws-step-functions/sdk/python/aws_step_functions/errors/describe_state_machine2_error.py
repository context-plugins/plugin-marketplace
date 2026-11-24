from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStateMachine2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStateMachine2Error:
    def map(self, status_code: int, content: bytes) -> DescribeStateMachine2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_state_machine2_error_mapper: Final[ErrorMapper[DescribeStateMachine2ErrorBody]] = _DescribeStateMachine2Error()
