from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .completed_payment_dto import CompletedPaymentDto, CompletedPaymentDtoDict
from .failed_payment_dto import FailedPaymentDto, FailedPaymentDtoDict
from .scheduled_payment_dto import ScheduledPaymentDto, ScheduledPaymentDtoDict


class MassPaymentDetailsResponseDto(SdkBaseModel):
    """Mass payment details response DTO."""

    count: Optional[int] = UNSET
    """Total number of payments in the mass payment batch"""

    scheduled: Optional[list[ScheduledPaymentDto]] = UNSET
    """Scheduled payments. For each payment in the list, BILL has not started generating a payment ``id`` value and API
    response."""

    completed: Optional[list[CompletedPaymentDto]] = UNSET
    """Completed payments. For each payment in the list, BILL has successfully generated a payment ``id`` value and API
    response.

    In the response, if the payment ``id`` is the same for multiple bills, the vendor has ``combinePayments`` set as
    ``true``.

    **Note**: From the list of ``completed`` payments, BILL begins processing payments based on the payment
    ``processDate``."""

    failed: Optional[list[FailedPaymentDto]] = UNSET
    """Failed payments. An error response is available for each failed payment."""


class MassPaymentDetailsResponseDtoDict(TypedDict):
    count: NotRequired[int]
    scheduled: NotRequired[list[ScheduledPaymentDtoDict]]
    completed: NotRequired[list[CompletedPaymentDtoDict]]
    failed: NotRequired[list[FailedPaymentDtoDict]]
