from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomDonationAmounts(SdkBaseModel):
    """Custom donation amounts. JSON object; the dashboard groups amounts by frequency (``once``, ``monthly``,
    ``quarterly``, ``yearly``)."""

    name: Literal["custom_donation_amounts"] = "custom_donation_amounts"
    value: Optional[Any] = UNSET


class CustomDonationAmountsDict(TypedDict):
    name: Literal["custom_donation_amounts"]
    value: NotRequired[Any]
