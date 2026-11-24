from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudDiagramsSearchRequest(SdkBaseModel):
    """Request body for searching diagrams and components."""

    query: str
    """Search query string."""

    ss_id: Optional[str] = UNSET
    """Limit search to components within this layer."""

    from_: Optional[int] = Field(default=UNSET, alias="from")
    """Pagination offset (default 0)."""

    size: Optional[int] = UNSET
    """Maximum number of results per category (default 20)."""


class CloudDiagramsSearchRequestDict(TypedDict):
    query: str
    ss_id: NotRequired[str]
    from_: NotRequired[int]
    size: NotRequired[int]
