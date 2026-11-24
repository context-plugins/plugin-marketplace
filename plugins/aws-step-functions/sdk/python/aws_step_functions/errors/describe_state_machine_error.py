from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStateMachineErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStateMachineError:
    def map(self, status_code: int, content: bytes) -> DescribeStateMachineErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_state_machine_error_mapper: Final[ErrorMapper[DescribeStateMachineErrorBody]] = _DescribeStateMachineError()
