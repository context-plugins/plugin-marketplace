from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStateMachineVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStateMachineVersionError:
    def map(self, status_code: int, content: bytes) -> DeleteStateMachineVersionErrorBody:
        match status_code:
            case 400 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_state_machine_version_error_mapper: Final[
    ErrorMapper[DeleteStateMachineVersionErrorBody]
] = _DeleteStateMachineVersionError()
