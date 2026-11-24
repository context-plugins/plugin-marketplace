from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ResultsControllerGetEvaluationsPerHourByProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ResultsControllerGetEvaluationsPerHourByProjectError:
    def map(self, status_code: int, content: bytes) -> ResultsControllerGetEvaluationsPerHourByProjectErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


results_controller_get_evaluations_per_hour_by_project_error_mapper: Final[
    ErrorMapper[ResultsControllerGetEvaluationsPerHourByProjectErrorBody]
] = _ResultsControllerGetEvaluationsPerHourByProjectError()
