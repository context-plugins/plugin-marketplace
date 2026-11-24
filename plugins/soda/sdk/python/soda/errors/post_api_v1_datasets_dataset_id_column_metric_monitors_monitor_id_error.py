from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError:
    def map(self, status_code: int, content: bytes) -> PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper: Final[
    ErrorMapper[PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]
] = _PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError()
