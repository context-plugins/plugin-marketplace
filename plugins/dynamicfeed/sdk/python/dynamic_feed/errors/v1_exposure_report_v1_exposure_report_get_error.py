from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1ExposureReportV1ExposureReportGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1ExposureReportV1ExposureReportGetError:
    def map(self, status_code: int, content: bytes) -> V1ExposureReportV1ExposureReportGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_exposure_report_v1_exposure_report_get_error_mapper: Final[
    ErrorMapper[V1ExposureReportV1ExposureReportGetErrorBody]
] = _V1ExposureReportV1ExposureReportGetError()
