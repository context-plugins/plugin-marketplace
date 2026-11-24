from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .downtime_instrument import DowntimeInstrument, DowntimeInstrumentDict
from .enums.entity_razorpay_payment_downtimes_api import EntityRazorpayPaymentDowntimesApiOrStr
from .enums.method_razorpay_payment_downtimes_api import MethodRazorpayPaymentDowntimesApiOrStr
from .enums.severity import SeverityOrStr
from .enums.status_razorpay_payment_downtimes_api import StatusRazorpayPaymentDowntimesApiOrStr


class PaymentDowntime(SdkBaseModel):
    id: Optional[str] = UNSET
    entity: Optional[EntityRazorpayPaymentDowntimesApiOrStr] = UNSET
    method: Optional[MethodRazorpayPaymentDowntimesApiOrStr] = UNSET
    begin: Optional[int] = UNSET
    end: OptionalNullable[int] = UNSET
    status: Optional[StatusRazorpayPaymentDowntimesApiOrStr] = UNSET
    scheduled: Optional[bool] = UNSET
    severity: Optional[SeverityOrStr] = UNSET
    instrument: Optional[DowntimeInstrument] = UNSET
    created_at: Optional[int] = UNSET
    updated_at: Optional[int] = UNSET


class PaymentDowntimeDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayPaymentDowntimesApiOrStr]
    method: NotRequired[MethodRazorpayPaymentDowntimesApiOrStr]
    begin: NotRequired[int]
    end: NotRequired[int | None]
    status: NotRequired[StatusRazorpayPaymentDowntimesApiOrStr]
    scheduled: NotRequired[bool]
    severity: NotRequired[SeverityOrStr]
    instrument: NotRequired[DowntimeInstrumentDict]
    created_at: NotRequired[int]
    updated_at: NotRequired[int]
