from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStateMachineForExecutionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStateMachineForExecutionError:
    def map(self, status_code: int, content: bytes) -> DescribeStateMachineForExecutionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_state_machine_for_execution_error_mapper: Final[
    ErrorMapper[DescribeStateMachineForExecutionErrorBody]
] = _DescribeStateMachineForExecutionError()
