from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MerchantUrls2(SdkBaseModel):
    success: OptionalNullable[str] = UNSET
    """URL where to redirect after payment is Authorized. 'Thank you' page recommended."""

    cancel: OptionalNullable[str] = UNSET
    """URL where to proceed after cancel payment status. Checkout page recommended."""

    failure: OptionalNullable[str] = UNSET
    """URL where to proceed after failure payment status (Rejected). Checkout page recommended."""


class MerchantUrls2Dict(TypedDict):
    success: NotRequired[str | None]
    cancel: NotRequired[str | None]
    failure: NotRequired[str | None]
