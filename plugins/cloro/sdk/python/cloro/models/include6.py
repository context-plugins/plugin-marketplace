from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include6(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include a URL to the full HTML of the response"""

    markdown: bool = False
    """Include markdown-formatted response in the result"""

    expand_products: bool = Field(default=False, alias="expandProducts")
    """Fetch merchant offers for the product clusters in the response and return them as 'result.productResults'.
    Clusters are deduplicated across shopping cards and inline products, and expansion covers at most 6 per scrape. Paid
    add-on: +1 credit per cluster returned, up to +6 (`pricing </guides/providers#ai-mode-additional-features>`__). Off
    by default."""

    google_goto: bool = Field(default=False, alias="googleGoto")
    """Ignored since 8th September 2026. Every redirect link now ships as ``redirectLink`` beside its destination, so
    both are returned without this flag. Requests still sending it behave as if it were absent."""


class Include6Dict(TypedDict):
    html: NotRequired[bool]
    markdown: NotRequired[bool]
    expand_products: NotRequired[bool]
    google_goto: NotRequired[bool]
