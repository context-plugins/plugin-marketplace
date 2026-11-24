from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateStateMachineAliasErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateStateMachineAliasError:
    def map(self, status_code: int, content: bytes) -> UpdateStateMachineAliasErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_state_machine_alias_error_mapper: Final[
    ErrorMapper[UpdateStateMachineAliasErrorBody]
] = _UpdateStateMachineAliasError()
