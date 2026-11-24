from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.tier import TierOrStr


class WebsiteDeclared(SdkBaseModel):
    """What a company's own website states about itself (provenance tier website_declared): identity context only, never
    a registry result. Present only when no Jid file holds or is associated with the domain."""

    tier: Optional[TierOrStr] = UNSET
    domain: Optional[str] = UNSET
    legal_name: Optional[str] = UNSET
    """As printed, with its legal form"""

    trade_name: OptionalNullable[str] = UNSET
    address: OptionalNullable[str] = UNSET
    """As printed; null when the site prints addresses in several states"""

    state: OptionalNullable[str] = UNSET
    postal_code: OptionalNullable[str] = UNSET
    source_url: Optional[str] = UNSET
    read_at: Optional[RFC3339DateTime] = UNSET
    how: Optional[str] = UNSET
    note: Optional[str] = UNSET


class WebsiteDeclaredDict(TypedDict):
    tier: NotRequired[TierOrStr]
    domain: NotRequired[str]
    legal_name: NotRequired[str]
    trade_name: NotRequired[str | None]
    address: NotRequired[str | None]
    state: NotRequired[str | None]
    postal_code: NotRequired[str | None]
    source_url: NotRequired[str]
    read_at: NotRequired[RFC3339DateTime]
    how: NotRequired[str]
    note: NotRequired[str]
