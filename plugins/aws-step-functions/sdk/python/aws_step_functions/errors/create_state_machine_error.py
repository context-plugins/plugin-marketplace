from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStateMachineErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStateMachineError:
    def map(self, status_code: int, content: bytes) -> CreateStateMachineErrorBody:
        match status_code:
            case 400 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_state_machine_error_mapper: Final[ErrorMapper[CreateStateMachineErrorBody]] = _CreateStateMachineError()
