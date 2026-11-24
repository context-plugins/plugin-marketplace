from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_property import SourceProperty, SourcePropertyDict


class SourceObject(SdkBaseModel):
    """Source object."""

    properties: Optional[list[SourceProperty]] = UNSET
    """Optional. Source properties. When unspecified as part of include objects, includes everything, when unspecified
    as part of exclude objects, excludes nothing."""

    object_name: Optional[str] = Field(default=UNSET, alias="objectName")
    """Required. The object name."""


class SourceObjectDict(TypedDict):
    properties: NotRequired[list[SourcePropertyDict]]
    object_name: NotRequired[str]
