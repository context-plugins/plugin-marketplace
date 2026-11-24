from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Admission(SdkBaseModel):
    provider: Optional[str] = UNSET
    """Ticket provider name"""

    price: Optional[str] = UNSET
    """Admission price as displayed"""

    link: Optional[str] = UNSET
    """URL to purchase tickets"""

    badge: Optional[str] = UNSET
    """Optional badge text (e.g. "Free", "Best price") — omitted when not present"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class AdmissionDict(TypedDict):
    provider: NotRequired[str]
    price: NotRequired[str]
    link: NotRequired[str]
    badge: NotRequired[str]
    redirect_link: NotRequired[str]
