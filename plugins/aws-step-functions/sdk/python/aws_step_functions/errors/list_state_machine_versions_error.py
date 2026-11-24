from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStateMachineVersionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStateMachineVersionsError:
    def map(self, status_code: int, content: bytes) -> ListStateMachineVersionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_state_machine_versions_error_mapper: Final[
    ErrorMapper[ListStateMachineVersionsErrorBody]
] = _ListStateMachineVersionsError()
