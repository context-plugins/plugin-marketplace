from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object import SourceObject, SourceObjectDict


class SourceCatalog(SdkBaseModel):
    """Source catalog."""

    objects: Optional[list[SourceObject]] = UNSET
    """Optional. Source objects in the catalog."""


class SourceCatalogDict(TypedDict):
    objects: NotRequired[list[SourceObjectDict]]
