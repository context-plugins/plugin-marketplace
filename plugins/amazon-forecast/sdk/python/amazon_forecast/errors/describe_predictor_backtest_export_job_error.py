from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribePredictorBacktestExportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribePredictorBacktestExportJobError:
    def map(self, status_code: int, content: bytes) -> DescribePredictorBacktestExportJobErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_predictor_backtest_export_job_error_mapper: Final[
    ErrorMapper[DescribePredictorBacktestExportJobErrorBody]
] = _DescribePredictorBacktestExportJobError()
