from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartSandboxConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartSandboxConnectionError:
    def map(self, status_code: int, content: bytes) -> StartSandboxConnectionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_sandbox_connection_error_mapper: Final[
    ErrorMapper[StartSandboxConnectionErrorBody]
] = _StartSandboxConnectionError()
