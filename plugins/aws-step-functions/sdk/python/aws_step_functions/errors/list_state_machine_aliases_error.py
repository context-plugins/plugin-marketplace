from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStateMachineAliasesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStateMachineAliasesError:
    def map(self, status_code: int, content: bytes) -> ListStateMachineAliasesErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_state_machine_aliases_error_mapper: Final[
    ErrorMapper[ListStateMachineAliasesErrorBody]
] = _ListStateMachineAliasesError()
