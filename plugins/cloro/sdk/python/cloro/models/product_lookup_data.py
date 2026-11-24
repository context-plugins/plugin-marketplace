from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductLookupData(SdkBaseModel):
    """Structured product lookup query data"""

    request_query: Optional[str] = UNSET
    """Search query used for this product"""

    all_ids: Optional[dict[str, Any]] = UNSET
    """Provider-to-ID mapping"""

    metadata_sources: Optional[list[str]] = UNSET


class ProductLookupDataDict(TypedDict):
    request_query: NotRequired[str]
    all_ids: NotRequired[dict[str, Any]]
    metadata_sources: NotRequired[list[str]]
