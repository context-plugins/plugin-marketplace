from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source_introspection_model_field import (
    DataSourceIntrospectionModelField,
    DataSourceIntrospectionModelFieldDict,
)
from .data_source_introspection_model_index import (
    DataSourceIntrospectionModelIndex,
    DataSourceIntrospectionModelIndexDict,
)


class DataSourceIntrospectionModel(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the model. For example, this could be the name of a single table in a database."""

    fields: Optional[list[DataSourceIntrospectionModelField]] = UNSET
    """The DataSourceIntrospectionModelField object data."""

    primary_key: Optional[DataSourceIntrospectionModelIndex] = Field(default=UNSET, alias="primaryKey")
    indexes: Optional[list[DataSourceIntrospectionModelIndex]] = UNSET
    """The array of DataSourceIntrospectionModelIndex objects."""

    sdl: Optional[str] = UNSET
    """Contains the output of the SDL that was generated from the introspected types. This is controlled by the
    includeModelsSDL parameter of the GetDataSourceIntrospection operation."""


class DataSourceIntrospectionModelDict(TypedDict):
    name: NotRequired[str]
    fields: NotRequired[list[DataSourceIntrospectionModelFieldDict]]
    primary_key: NotRequired[DataSourceIntrospectionModelIndexDict]
    indexes: NotRequired[list[DataSourceIntrospectionModelIndexDict]]
    sdl: NotRequired[str]
