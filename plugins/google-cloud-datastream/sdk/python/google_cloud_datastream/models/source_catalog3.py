from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object import SourceObject, SourceObjectDict


class SourceCatalog3(SdkBaseModel):
    """Enriched source catalog. This is mainly used to represent SaaS sources databases."""

    objects: Optional[list[SourceObject]] = UNSET
    """Optional. Source objects in the catalog."""


class SourceCatalog3Dict(TypedDict):
    objects: NotRequired[list[SourceObjectDict]]
