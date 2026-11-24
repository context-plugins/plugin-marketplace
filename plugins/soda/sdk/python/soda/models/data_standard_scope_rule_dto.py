from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_scope_attribute_filter_dto import (
    DataStandardScopeAttributeFilterDto,
    DataStandardScopeAttributeFilterDtoDict,
)


class DataStandardScopeRuleDto(SdkBaseModel):
    attributes_filter: Optional[DataStandardScopeAttributeFilterDto] = Field(default=UNSET, alias="attributesFilter")
    datasource_id: Optional[str] = Field(default=UNSET, alias="datasourceId")
    name: Optional[str] = UNSET
    schema_value: Optional[str] = Field(default=UNSET, alias="schema")


class DataStandardScopeRuleDtoDict(TypedDict):
    attributes_filter: NotRequired[DataStandardScopeAttributeFilterDtoDict]
    datasource_id: NotRequired[str]
    name: NotRequired[str]
    schema_value: NotRequired[str]
