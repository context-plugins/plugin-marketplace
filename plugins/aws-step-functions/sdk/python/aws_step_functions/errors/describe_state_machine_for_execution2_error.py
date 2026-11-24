from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStateMachineForExecution2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStateMachineForExecution2Error:
    def map(self, status_code: int, content: bytes) -> DescribeStateMachineForExecution2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_state_machine_for_execution2_error_mapper: Final[
    ErrorMapper[DescribeStateMachineForExecution2ErrorBody]
] = _DescribeStateMachineForExecution2Error()
