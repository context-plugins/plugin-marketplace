from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateDatasetTimePartitionRequestDto(SdkBaseModel):
    partition_column: Optional[str] = Field(default=UNSET, alias="partitionColumn")
    sql_expression: Optional[str] = Field(default=UNSET, alias="sqlExpression")


class UpdateDatasetTimePartitionRequestDtoDict(TypedDict):
    partition_column: NotRequired[str]
    sql_expression: NotRequired[str]
