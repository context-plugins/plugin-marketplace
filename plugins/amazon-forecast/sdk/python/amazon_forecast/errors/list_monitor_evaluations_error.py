from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMonitorEvaluationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMonitorEvaluationsError:
    def map(self, status_code: int, content: bytes) -> ListMonitorEvaluationsErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_monitor_evaluations_error_mapper: Final[
    ErrorMapper[ListMonitorEvaluationsErrorBody]
] = _ListMonitorEvaluationsError()
