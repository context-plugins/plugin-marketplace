from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetAccuracyMetricsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetAccuracyMetricsError:
    def map(self, status_code: int, content: bytes) -> GetAccuracyMetricsErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_accuracy_metrics_error_mapper: Final[ErrorMapper[GetAccuracyMetricsErrorBody]] = _GetAccuracyMetricsError()
