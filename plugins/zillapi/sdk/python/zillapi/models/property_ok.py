from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .property import Property, PropertyDict


class PropertyOk(SdkBaseModel):
    data: Optional[Property] = UNSET
    """Full property-detail record (300+ fields; additional properties allowed). This is the DETAIL shape and differs
    from the SearchResultRow shape returned by search endpoints."""

    request_id: Optional[str] = UNSET


class PropertyOkDict(TypedDict):
    data: NotRequired[PropertyDict]
    request_id: NotRequired[str]
