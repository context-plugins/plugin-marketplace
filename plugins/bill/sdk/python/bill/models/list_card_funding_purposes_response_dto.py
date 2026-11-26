from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funding_purpose import FundingPurpose, FundingPurposeDict


class ListCardFundingPurposesResponseDto(SdkBaseModel):
    """Card funding purposes dto."""

    last_used_purpose: Optional[str] = Field(default=UNSET, alias="lastUsedPurpose")
    """Last used purpose. This value was last used as the ``cardFundingPurpose`` value in a payment request.

    **Note**: This field is available only for the AMEX, VISA, and MASTERCARD card brands."""

    results: Optional[list[FundingPurpose]] = UNSET
    """List of card funding purpose values based on the vendor and card brand. Use a ``subCategories`` value for an
    AMEX, VISA, or MASTERCARD card brand. Use a ``category`` value for all other card brands."""


class ListCardFundingPurposesResponseDtoDict(TypedDict):
    last_used_purpose: NotRequired[str]
    results: NotRequired[list[FundingPurposeDict]]
