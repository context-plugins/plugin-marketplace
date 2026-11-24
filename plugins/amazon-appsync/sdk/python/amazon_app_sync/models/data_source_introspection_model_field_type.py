from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataSourceIntrospectionModelFieldType(SdkBaseModel):
    kind: Optional[str] = UNSET
    """Specifies the classification of data. For example, this could be set to values like Scalar or NonNull to indicate
    a fundamental property of the field. Valid values include: Scalar: Indicates the value is a primitive type (scalar).
    NonNull: Indicates the field cannot be null. List: Indicates the field contains a list."""

    name: Optional[str] = UNSET
    """The name of the data type that represents the field. For example, String is a valid name value."""

    type_: Optional[DataSourceIntrospectionModelFieldType] = Field(default=UNSET, alias="type")
    values: Optional[list[str]] = UNSET
    """The values of the type field. This field represents the AppSync data type equivalent of the introspected
    field."""


class DataSourceIntrospectionModelFieldTypeDict(TypedDict):
    kind: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[DataSourceIntrospectionModelFieldTypeDict]
    values: NotRequired[list[str]]
