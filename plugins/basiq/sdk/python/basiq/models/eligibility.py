from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.discount_eligibility_type import DiscountEligibilityTypeOrStr


class Eligibility(SdkBaseModel):
    discount_eligibility_type: DiscountEligibilityTypeOrStr = Field(alias="discountEligibilityType")
    """The type of the specific eligibility constraint for a discountType."""

    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Generic field containing additional information relevant to the discountEligibilityType specified. Whether
    mandatory or not is dependent on the value of discountEligibilityType."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on
    the value of discountEligibilityType."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this eligibility constraint."""


class EligibilityDict(TypedDict):
    discount_eligibility_type: DiscountEligibilityTypeOrStr
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
