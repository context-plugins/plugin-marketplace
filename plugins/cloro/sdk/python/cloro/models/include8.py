from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include8(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include a URL to the full HTML of the response"""

    markdown: bool = False
    """Include markdown-formatted response in the result"""

    raw_response: bool = Field(default=False, alias="rawResponse")
    """Include ChatGPT's raw response payload. Paid add-on: one flat +2 credits covers any combination of
    ``rawResponse``, ``searchQueries``, ``ads`` and ``shopping`` (`pricing
    </guides/providers#chatgpt-additional-features>`__)."""

    search_queries: bool = Field(default=False, alias="searchQueries")
    """Include the query fan-out ChatGPT used to generate the response. Paid add-on: one flat +2 credits covers any
    combination of ``rawResponse``, ``searchQueries``, ``ads`` and ``shopping`` (`pricing
    </guides/providers#chatgpt-additional-features>`__)."""

    ads: bool = False
    """Include ads displayed in ChatGPT response. ChatGPT currently shows ads only in answers to a follow-up prompt, and
    far more often on the legacy interface: send ``prompt`` as an array with ``legacy: true``. Paid add-on: one flat +2
    credits covers any combination of ``rawResponse``, ``searchQueries``, ``ads`` and ``shopping`` (`pricing
    </guides/providers#chatgpt-additional-features>`__)."""

    shopping: bool = False
    """Include shopping cards and inline products with pricing and offers. Paid add-on: one flat +2 credits covers any
    combination of ``rawResponse``, ``searchQueries``, ``ads`` and ``shopping`` (`pricing
    </guides/providers#chatgpt-additional-features>`__)."""

    product_details: bool = Field(default=False, alias="productDetails")
    """Add the rationale and reviews from each product's sheet as ``productDetails``. Needs ``shopping``. +2 credits on
    top of ``shopping``."""


class Include8Dict(TypedDict):
    html: NotRequired[bool]
    markdown: NotRequired[bool]
    raw_response: NotRequired[bool]
    search_queries: NotRequired[bool]
    ads: NotRequired[bool]
    shopping: NotRequired[bool]
    product_details: NotRequired[bool]
