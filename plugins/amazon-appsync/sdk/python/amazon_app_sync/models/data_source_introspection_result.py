from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source_introspection_model import DataSourceIntrospectionModel, DataSourceIntrospectionModelDict


class DataSourceIntrospectionResult(SdkBaseModel):
    models: Optional[list[DataSourceIntrospectionModel]] = UNSET
    """The array of DataSourceIntrospectionModel objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """Determines the number of types to be returned in a single response before paginating. This value is typically
    taken from nextToken value from the previous response."""


class DataSourceIntrospectionResultDict(TypedDict):
    models: NotRequired[list[DataSourceIntrospectionModelDict]]
    next_token: NotRequired[str]
