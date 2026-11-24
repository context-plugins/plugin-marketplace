from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerAliasCreateRequest(SdkBaseModel):
    alias: str
    """Alternate external identifier that should resolve to this customer."""

    name: Optional[str] = UNSET
    """Optional display name for this alias."""

    description: Optional[str] = UNSET
    """Optional note describing where this alias comes from."""


class CustomerAliasCreateRequestDict(TypedDict):
    alias: str
    name: NotRequired[str]
    description: NotRequired[str]
