from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.column_type_dto import ColumnTypeDtoOrStr


class DatasetPartitionColumnContentDto(SdkBaseModel):
    column_type: ColumnTypeDtoOrStr = Field(alias="columnType")
    name: str


class DatasetPartitionColumnContentDtoDict(TypedDict):
    column_type: ColumnTypeDtoOrStr
    name: str
