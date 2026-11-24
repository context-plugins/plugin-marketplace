from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopSandboxErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopSandboxError:
    def map(self, status_code: int, content: bytes) -> StopSandboxErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_sandbox_error_mapper: Final[ErrorMapper[StopSandboxErrorBody]] = _StopSandboxError()
