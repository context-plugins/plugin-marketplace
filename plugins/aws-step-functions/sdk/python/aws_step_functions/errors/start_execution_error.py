from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartExecutionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartExecutionError:
    def map(self, status_code: int, content: bytes) -> StartExecutionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_execution_error_mapper: Final[ErrorMapper[StartExecutionErrorBody]] = _StartExecutionError()
