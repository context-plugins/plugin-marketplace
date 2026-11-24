from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStateMachine2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStateMachine2Error:
    def map(self, status_code: int, content: bytes) -> CreateStateMachine2ErrorBody:
        match status_code:
            case 400 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_state_machine2_error_mapper: Final[ErrorMapper[CreateStateMachine2ErrorBody]] = _CreateStateMachine2Error()
