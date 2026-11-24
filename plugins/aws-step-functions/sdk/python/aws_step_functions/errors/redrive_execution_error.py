from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RedriveExecutionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RedriveExecutionError:
    def map(self, status_code: int, content: bytes) -> RedriveExecutionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


redrive_execution_error_mapper: Final[ErrorMapper[RedriveExecutionErrorBody]] = _RedriveExecutionError()
