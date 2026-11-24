from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListPredictorBacktestExportJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListPredictorBacktestExportJobsError:
    def map(self, status_code: int, content: bytes) -> ListPredictorBacktestExportJobsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_predictor_backtest_export_jobs_error_mapper: Final[
    ErrorMapper[ListPredictorBacktestExportJobsErrorBody]
] = _ListPredictorBacktestExportJobsError()
