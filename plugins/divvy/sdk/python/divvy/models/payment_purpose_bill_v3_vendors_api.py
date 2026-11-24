from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.payment_purpose_type import PaymentPurposeTypeOrStr
from .name_value import NameValue, NameValueDict


class PaymentPurposeBillV3VendorsApi(SdkBaseModel):
    """Payment purpose for vendor."""

    required: Optional[bool] = UNSET
    """Set as ``true`` if payment purpose information is required. If ``required`` is set as ``false``,
    ``paymentPurpose`` information is not required in your create vendor or payment API request."""

    type_: Optional[PaymentPurposeTypeOrStr] = Field(default=UNSET, alias="type")
    codes: Optional[list[NameValue]] = UNSET
    """Available payment purpose codes"""


class PaymentPurposeBillV3VendorsApiDict(TypedDict):
    required: NotRequired[bool]
    type_: NotRequired[PaymentPurposeTypeOrStr]
    codes: NotRequired[list[NameValueDict]]
