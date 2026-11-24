from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_bill_v3_vendors_api import CodeBillV3VendorsApi, CodeBillV3VendorsApiDict


class PaymentPurpose3(SdkBaseModel):
    text: Optional[str] = UNSET
    """Payment purpose text"""

    code: Optional[CodeBillV3VendorsApi] = UNSET


class PaymentPurpose3Dict(TypedDict):
    text: NotRequired[str]
    code: NotRequired[CodeBillV3VendorsApiDict]
