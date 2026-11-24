from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GoogleProductRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    product_result_token: str = Field(alias="productResultToken")
    """The ``productResultToken`` from a Google Search shopping card, or from a Google AI Mode shopping card or inline
    product. The token carries the query, locale and location of the request that issued it, so the request takes no
    other field."""


class GoogleProductRequestDict(TypedDict):
    product_result_token: str
