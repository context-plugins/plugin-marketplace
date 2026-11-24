from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source_introspection_model_field_type import (
    DataSourceIntrospectionModelFieldType,
    DataSourceIntrospectionModelFieldTypeDict,
)


class DataSourceIntrospectionModelField(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the field that was retrieved from the introspected data."""

    type_: Optional[DataSourceIntrospectionModelFieldType] = Field(default=UNSET, alias="type")
    length: Optional[int] = UNSET
    """The length value of the introspected field."""


class DataSourceIntrospectionModelFieldDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[DataSourceIntrospectionModelFieldTypeDict]
    length: NotRequired[int]
