from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCommandExecutionsForSandboxErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCommandExecutionsForSandboxError:
    def map(self, status_code: int, content: bytes) -> ListCommandExecutionsForSandboxErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_command_executions_for_sandbox_error_mapper: Final[
    ErrorMapper[ListCommandExecutionsForSandboxErrorBody]
] = _ListCommandExecutionsForSandboxError()
