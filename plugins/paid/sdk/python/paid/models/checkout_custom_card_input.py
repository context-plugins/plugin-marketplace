from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CheckoutCustomCardInput(SdkBaseModel):
    label: str
    """Card title."""

    price_text: Optional[str] = Field(default=UNSET, alias="priceText")
    """Headline price text, e.g. "$99/mo"."""

    button_text: Optional[str] = Field(default=UNSET, alias="buttonText")
    """Call-to-action button label."""

    button_url: Optional[str] = Field(default=UNSET, alias="buttonUrl")
    """Call-to-action button URL."""


class CheckoutCustomCardInputDict(TypedDict):
    label: str
    price_text: NotRequired[str]
    button_text: NotRequired[str]
    button_url: NotRequired[str]
