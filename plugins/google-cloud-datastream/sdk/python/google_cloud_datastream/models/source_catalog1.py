from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object import SourceObject, SourceObjectDict


class SourceCatalog1(SdkBaseModel):
    """Optional. The objects to exclude from the stream."""

    objects: Optional[list[SourceObject]] = UNSET
    """Optional. Source objects in the catalog."""


class SourceCatalog1Dict(TypedDict):
    objects: NotRequired[list[SourceObjectDict]]
