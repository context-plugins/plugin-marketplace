from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aioverview1 import Aioverview1, Aioverview1Dict


class Include7(SdkBaseModel):
    """Optional flags for including additional response data"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include raw HTML response from Google search"""

    aioverview: Optional[Aioverview1] = UNSET
    """Include Google AI Overview in the response. Paid add-on: one flat +2 credits covers ``aioverview`` and
    ``paaAioverview``, alone or together (`pricing </guides/providers#google-search-multi-page-pricing>`__)."""

    paa_aioverview: bool = Field(default=False, alias="paaAioverview")
    """Hydrate AI-Overview-type People Also Ask items with markdown content and sources. Paid add-on: one flat +2
    credits covers ``aioverview`` and ``paaAioverview``, alone or together (`pricing
    </guides/providers#google-search-multi-page-pricing>`__). Each hydrated item adds one scraper fetch (typically 1-2
    per page), so responses take longer."""

    google_goto: bool = Field(default=False, alias="googleGoto")
    """Ignored since 8th September 2026. Every redirect link now ships as ``redirectLink`` beside its destination, so
    both are returned without this flag. Requests still sending it behave as if it were absent."""


class Include7Dict(TypedDict):
    html: NotRequired[bool]
    aioverview: NotRequired[Aioverview1Dict]
    paa_aioverview: NotRequired[bool]
    google_goto: NotRequired[bool]
