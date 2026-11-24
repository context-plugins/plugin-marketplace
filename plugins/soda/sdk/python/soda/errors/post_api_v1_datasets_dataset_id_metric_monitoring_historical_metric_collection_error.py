from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError:
    def map(
        self, status_code: int, content: bytes
    ) -> PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody:
        match status_code:
            case 400 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error_mapper: Final[
    ErrorMapper[PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody]
] = _PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError()
