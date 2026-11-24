from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartSandboxErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartSandboxError:
    def map(self, status_code: int, content: bytes) -> StartSandboxErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_sandbox_error_mapper: Final[ErrorMapper[StartSandboxErrorBody]] = _StartSandboxError()
