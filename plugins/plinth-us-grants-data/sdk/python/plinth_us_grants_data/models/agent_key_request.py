from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentKeyRequest(SdkBaseModel):
    purpose: str
    """What you are evaluating. Recorded, never verified, never gates — but required."""

    source: str
    """Who or what is calling: an agent name, product or host. Recorded, unverified, required."""

    contact: Optional[str] = UNSET
    """Optional. A URL or address we can reach you at."""


class AgentKeyRequestDict(TypedDict):
    purpose: str
    source: str
    contact: NotRequired[str]
