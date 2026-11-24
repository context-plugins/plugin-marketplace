from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BeneficiaryDetails(SdkBaseModel):
    """Details about the beneficiary."""

    name: Optional[str] = UNSET
    """The name of the beneficiary."""

    country: Optional[str] = UNSET
    """The country of the beneficiary (ISO 3166-1 alpha-2)."""

    message: Optional[str] = UNSET
    """An optional message for the beneficiary."""


class BeneficiaryDetailsDict(TypedDict):
    name: NotRequired[str]
    country: NotRequired[str]
    message: NotRequired[str]
