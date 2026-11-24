from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AnomalyDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AnomalyDetectionError:
    def map(self, status_code: int, content: bytes) -> AnomalyDetectionErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


anomaly_detection_error_mapper: Final[ErrorMapper[AnomalyDetectionErrorBody]] = _AnomalyDetectionError()
