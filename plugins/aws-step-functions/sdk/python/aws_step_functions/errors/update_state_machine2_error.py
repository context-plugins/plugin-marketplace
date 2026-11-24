from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateStateMachine2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateStateMachine2Error:
    def map(self, status_code: int, content: bytes) -> UpdateStateMachine2ErrorBody:
        match status_code:
            case 400 | 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_state_machine2_error_mapper: Final[ErrorMapper[UpdateStateMachine2ErrorBody]] = _UpdateStateMachine2Error()
