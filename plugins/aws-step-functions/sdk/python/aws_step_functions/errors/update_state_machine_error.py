from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateStateMachineErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateStateMachineError:
    def map(self, status_code: int, content: bytes) -> UpdateStateMachineErrorBody:
        match status_code:
            case 400 | 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_state_machine_error_mapper: Final[ErrorMapper[UpdateStateMachineErrorBody]] = _UpdateStateMachineError()
