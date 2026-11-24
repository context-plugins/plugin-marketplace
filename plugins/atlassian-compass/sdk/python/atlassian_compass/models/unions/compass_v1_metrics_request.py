from __future__ import annotations

from typing import TypeAlias

from ..insert_metric_by_metric_definition_request_dto import (
    InsertMetricByMetricDefinitionRequestDto,
    InsertMetricByMetricDefinitionRequestDtoDict,
)
from ..insert_metric_by_metric_source_request_dto import (
    InsertMetricByMetricSourceRequestDto,
    InsertMetricByMetricSourceRequestDtoDict,
)

CompassV1MetricsRequest: TypeAlias = InsertMetricByMetricDefinitionRequestDto | InsertMetricByMetricSourceRequestDto

CompassV1MetricsRequestDict: TypeAlias = (
    InsertMetricByMetricDefinitionRequestDtoDict | InsertMetricByMetricSourceRequestDtoDict
)
