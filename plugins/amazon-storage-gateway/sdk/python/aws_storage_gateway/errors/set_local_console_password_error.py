from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SetLocalConsolePasswordErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SetLocalConsolePasswordError:
    def map(self, status_code: int, content: bytes) -> SetLocalConsolePasswordErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


set_local_console_password_error_mapper: Final[
    ErrorMapper[SetLocalConsolePasswordErrorBody]
] = _SetLocalConsolePasswordError()
