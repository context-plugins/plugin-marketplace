from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStateMachineErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStateMachineError:
    def map(self, status_code: int, content: bytes) -> DeleteStateMachineErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_state_machine_error_mapper: Final[ErrorMapper[DeleteStateMachineErrorBody]] = _DeleteStateMachineError()
