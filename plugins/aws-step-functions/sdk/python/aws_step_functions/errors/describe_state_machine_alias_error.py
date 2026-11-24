from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStateMachineAliasErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStateMachineAliasError:
    def map(self, status_code: int, content: bytes) -> DescribeStateMachineAliasErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_state_machine_alias_error_mapper: Final[
    ErrorMapper[DescribeStateMachineAliasErrorBody]
] = _DescribeStateMachineAliasError()
