from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSiteRequest(SdkBaseModel):
    url: str
    timezone: Optional[str] = UNSET
    """IANA zone. Omitted = the server default."""

    hobby: bool = False
    """Request a hobby site. The domain must match a configured hobby suffix."""


class CreateSiteRequestDict(TypedDict):
    url: str
    timezone: NotRequired[str]
    hobby: NotRequired[bool]
