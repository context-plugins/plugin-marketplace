from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetCommandExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetCommandExecutionsError:
    def map(self, status_code: int, content: bytes) -> BatchGetCommandExecutionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_command_executions_error_mapper: Final[
    ErrorMapper[BatchGetCommandExecutionsErrorBody]
] = _BatchGetCommandExecutionsError()
