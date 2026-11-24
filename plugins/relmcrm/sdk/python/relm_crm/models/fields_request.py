from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type import DataType, DataTypeOrStr
from .enums.object_relm_crm_batch_api import ObjectRelmCrmBatchApiOrStr


class FieldsRequest(SdkBaseModel):
    object_: ObjectRelmCrmBatchApiOrStr = Field(alias="object")
    key: str
    label: Optional[str] = UNSET
    data_type: DataTypeOrStr = DataType.TEXT
    enum_group: Optional[str] = UNSET
    required: Optional[bool] = UNSET


class FieldsRequestDict(TypedDict):
    object_: ObjectRelmCrmBatchApiOrStr
    key: str
    label: NotRequired[str]
    data_type: NotRequired[DataTypeOrStr]
    enum_group: NotRequired[str]
    required: NotRequired[bool]
