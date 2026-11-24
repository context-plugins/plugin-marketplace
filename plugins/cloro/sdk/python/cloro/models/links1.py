from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links1(SdkBaseModel):
    """Action links rendered on the place, typically on business/service-style packs (plumbers, salons, …) and absent on
    restaurant packs whose places are plain buttons. Each key is present only when Google rendered that button."""

    website: Optional[str] = UNSET
    """The business's own website URL. When the card has no website button, it comes from the place data in the page."""

    directions: Optional[str] = UNSET
    """Absolute Google Maps directions URL"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Links1Dict(TypedDict):
    website: NotRequired[str]
    directions: NotRequired[str]
    redirect_link: NotRequired[str]
