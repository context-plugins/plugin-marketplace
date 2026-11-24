from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.data_standard_scope_attribute_filter_type_dto import DataStandardScopeAttributeFilterTypeDtoOrStr


class DataStandardScopeAttributeFilterDto(SdkBaseModel):
    attribute_name: Optional[str] = Field(default=UNSET, alias="attributeName")
    boolean_value: Optional[bool] = Field(default=UNSET, alias="booleanValue")
    date: Optional[RFC3339DateTime] = UNSET
    filters: Optional[list[DataStandardScopeAttributeFilterDto]] = UNSET
    type_: DataStandardScopeAttributeFilterTypeDtoOrStr = Field(alias="type")
    value: Optional[str] = UNSET


class DataStandardScopeAttributeFilterDtoDict(TypedDict):
    attribute_name: NotRequired[str]
    boolean_value: NotRequired[bool]
    date: NotRequired[RFC3339DateTime]
    filters: NotRequired[list[DataStandardScopeAttributeFilterDtoDict]]
    type_: DataStandardScopeAttributeFilterTypeDtoOrStr
    value: NotRequired[str]
