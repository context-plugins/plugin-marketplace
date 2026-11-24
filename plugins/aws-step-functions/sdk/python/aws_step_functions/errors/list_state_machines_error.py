from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStateMachinesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStateMachinesError:
    def map(self, status_code: int, content: bytes) -> ListStateMachinesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_state_machines_error_mapper: Final[ErrorMapper[ListStateMachinesErrorBody]] = _ListStateMachinesError()
