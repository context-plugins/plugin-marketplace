from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStateMachineAliasErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStateMachineAliasError:
    def map(self, status_code: int, content: bytes) -> DeleteStateMachineAliasErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_state_machine_alias_error_mapper: Final[
    ErrorMapper[DeleteStateMachineAliasErrorBody]
] = _DeleteStateMachineAliasError()
