from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_purpose5 import PaymentPurpose5, PaymentPurpose5Dict
from .validations2 import Validations2, Validations2Dict


class IntlPmtsConfigurationResponseDto(SdkBaseModel):
    """International payments configuration response."""

    payment_purpose: Optional[PaymentPurpose5] = Field(default=UNSET, alias="paymentPurpose")
    validations: Optional[Validations2] = UNSET


class IntlPmtsConfigurationResponseDtoDict(TypedDict):
    payment_purpose: NotRequired[PaymentPurpose5Dict]
    validations: NotRequired[Validations2Dict]
