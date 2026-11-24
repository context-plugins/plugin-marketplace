from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetExecutionHistoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetExecutionHistoryError:
    def map(self, status_code: int, content: bytes) -> GetExecutionHistoryErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_execution_history_error_mapper: Final[ErrorMapper[GetExecutionHistoryErrorBody]] = _GetExecutionHistoryError()
