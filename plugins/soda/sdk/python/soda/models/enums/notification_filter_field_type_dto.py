from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationFilterFieldTypeDto(str, Enum):
    DATASOURCE_ID = "datasourceId"
    DATASOURCE_LABEL = "datasourceLabel"
    DATASET_ID = "datasetId"
    DATASET_LABEL = "datasetLabel"
    DATASET_OWNER_ID = "datasetOwnerId"
    DATASET_TAGS = "datasetTags"
    CHECK_ID = "checkId"
    CHECK_NAME = "checkName"
    CHECK_OWNER_ID = "checkOwnerId"
    COLUMN_ID = "columnId"
    METRIC_TYPE = "metricType"
    DATASET_RESOURCE_ATTRIBUTE = "datasetResourceAttribute"
    CHECK_RESOURCE_ATTRIBUTE = "checkResourceAttribute"

    __str__ = str.__str__


NotificationFilterFieldTypeDtoOrStr: TypeAlias = Annotated[
    NotificationFilterFieldTypeDto | str, open_enum_validator(NotificationFilterFieldTypeDto)
]
