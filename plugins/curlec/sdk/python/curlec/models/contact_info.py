from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .chargeback import Chargeback, ChargebackDict
from .refund import Refund, RefundDict
from .support import Support, SupportDict


class ContactInfo(SdkBaseModel):
    chargeback: Optional[Chargeback] = UNSET
    refund: Optional[Refund] = UNSET
    support: Optional[Support] = UNSET


class ContactInfoDict(TypedDict):
    chargeback: NotRequired[ChargebackDict]
    refund: NotRequired[RefundDict]
    support: NotRequired[SupportDict]
