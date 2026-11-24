from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ValidateStateMachineDefinitionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ValidateStateMachineDefinitionError:
    def map(self, status_code: int, content: bytes) -> ValidateStateMachineDefinitionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


validate_state_machine_definition_error_mapper: Final[
    ErrorMapper[ValidateStateMachineDefinitionErrorBody]
] = _ValidateStateMachineDefinitionError()
