from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceProperty(SdkBaseModel):
    """Source property."""

    property_name: Optional[str] = Field(default=UNSET, alias="propertyName")
    """Required. The property name."""

    primary_key: Optional[bool] = Field(default=UNSET, alias="primaryKey")
    """Optional. Whether or not the property is a primary key."""

    properties: Optional[list[SourceProperty]] = UNSET
    """Optional. Source properties. When specified, it means that the current property contains nested properties of its
    own. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects,
    excludes nothing."""


class SourcePropertyDict(TypedDict):
    property_name: NotRequired[str]
    primary_key: NotRequired[bool]
    properties: NotRequired[list[SourcePropertyDict]]
