from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object import SourceObject, SourceObjectDict


class SourceCatalog2(SdkBaseModel):
    """Source catalog data source objects to avoid backfilling. This is mainly used to represent SaaS applications
    objects."""

    objects: Optional[list[SourceObject]] = UNSET
    """Optional. Source objects in the catalog."""


class SourceCatalog2Dict(TypedDict):
    objects: NotRequired[list[SourceObjectDict]]
