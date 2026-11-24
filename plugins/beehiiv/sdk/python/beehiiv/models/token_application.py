from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TokenApplication(SdkBaseModel):
    """OAuth application metadata attached to token info responses."""

    uid: Optional[str] = UNSET
    name: Optional[str] = UNSET


class TokenApplicationDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
