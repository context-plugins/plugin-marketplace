from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStateMachineAliasErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStateMachineAliasError:
    def map(self, status_code: int, content: bytes) -> CreateStateMachineAliasErrorBody:
        match status_code:
            case 400 | 402 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_state_machine_alias_error_mapper: Final[
    ErrorMapper[CreateStateMachineAliasErrorBody]
] = _CreateStateMachineAliasError()
