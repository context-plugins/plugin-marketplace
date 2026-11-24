from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code1_bill_v3_vendors_api import Code1BillV3VendorsApi, Code1BillV3VendorsApiDict


class PaymentPurposeRequestBillV3VendorsApi(SdkBaseModel):
    """Payment purpose request."""

    text: Optional[str] = UNSET
    """Payment purpose text. This can be any user-defined text. If you set ``text``, do not set ``code``."""

    code: Optional[Code1BillV3VendorsApi] = UNSET


class PaymentPurposeRequestBillV3VendorsApiDict(TypedDict):
    text: NotRequired[str]
    code: NotRequired[Code1BillV3VendorsApiDict]
