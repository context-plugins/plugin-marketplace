from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeletePredictorBacktestExportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeletePredictorBacktestExportJobError:
    def map(self, status_code: int, content: bytes) -> DeletePredictorBacktestExportJobErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_predictor_backtest_export_job_error_mapper: Final[
    ErrorMapper[DeletePredictorBacktestExportJobErrorBody]
] = _DeletePredictorBacktestExportJobError()
