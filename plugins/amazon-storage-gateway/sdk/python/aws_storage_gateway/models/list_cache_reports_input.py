from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCacheReportsInput(SdkBaseModel):
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """Opaque pagination token returned from a previous ListCacheReports operation. If present, Marker specifies where
    to continue the list from after a previous call to ListCacheReports. Optional."""


class ListCacheReportsInputDict(TypedDict):
    marker: NotRequired[str]
