from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_partition_column_content_dto import DatasetPartitionColumnContentDto, DatasetPartitionColumnContentDtoDict
from .enums.dataset_time_partition_type_dto import DatasetTimePartitionTypeDtoOrStr


class DatasetTimePartitionDto(SdkBaseModel):
    partition_column: Optional[DatasetPartitionColumnContentDto] = Field(default=UNSET, alias="partitionColumn")
    sql_expression: Optional[str] = Field(default=UNSET, alias="sqlExpression")
    time_partition_type: Optional[DatasetTimePartitionTypeDtoOrStr] = Field(default=UNSET, alias="timePartitionType")


class DatasetTimePartitionDtoDict(TypedDict):
    partition_column: NotRequired[DatasetPartitionColumnContentDtoDict]
    sql_expression: NotRequired[str]
    time_partition_type: NotRequired[DatasetTimePartitionTypeDtoOrStr]
