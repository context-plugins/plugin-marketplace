from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dataset_owner_dto_soda_cloud_api_v4_datasets_api import (
    DatasetOwnerDtoSodaCloudApiV4DatasetsApi,
    DatasetOwnerDtoSodaCloudApiV4DatasetsApiDict,
)
from .dataset_partition_column_content_dto import DatasetPartitionColumnContentDto, DatasetPartitionColumnContentDtoDict
from .dataset_time_partition_dto import DatasetTimePartitionDto, DatasetTimePartitionDtoDict
from .datasource_properties_dto import DatasourcePropertiesDto, DatasourcePropertiesDtoDict
from .enums.data_quality_status_dto import DataQualityStatusDtoOrStr


class DatasetsContentDto(SdkBaseModel):
    attributes: Optional[Any] = UNSET
    checks: int
    cloud_url: str = Field(alias="cloudUrl")
    data_quality_status: Optional[DataQualityStatusDtoOrStr] = Field(default=UNSET, alias="dataQualityStatus")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")
    datasource: Optional[DatasourcePropertiesDto] = UNSET
    health_status: int = Field(alias="healthStatus")
    id: str
    incidents: int
    label: Optional[str] = UNSET
    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    name: str
    owners: Optional[list[DatasetOwnerDtoSodaCloudApiV4DatasetsApi]] = UNSET
    partition_column: Optional[DatasetPartitionColumnContentDto] = Field(default=UNSET, alias="partitionColumn")
    qualified_name: Optional[str] = Field(default=UNSET, alias="qualifiedName")
    tags: Optional[list[str]] = UNSET
    time_partition: Optional[DatasetTimePartitionDto] = Field(default=UNSET, alias="timePartition")


class DatasetsContentDtoDict(TypedDict):
    attributes: NotRequired[Any]
    checks: int
    cloud_url: str
    data_quality_status: NotRequired[DataQualityStatusDtoOrStr]
    dataset_qualified_name: NotRequired[str]
    datasource: NotRequired[DatasourcePropertiesDtoDict]
    health_status: int
    id: str
    incidents: int
    label: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
    name: str
    owners: NotRequired[list[DatasetOwnerDtoSodaCloudApiV4DatasetsApiDict]]
    partition_column: NotRequired[DatasetPartitionColumnContentDtoDict]
    qualified_name: NotRequired[str]
    tags: NotRequired[list[str]]
    time_partition: NotRequired[DatasetTimePartitionDtoDict]
