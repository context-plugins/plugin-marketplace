from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_bill_v3_vendors_api import FieldBillV3VendorsApi, FieldBillV3VendorsApiDict


class Validations2(SdkBaseModel):
    fields: Optional[list[FieldBillV3VendorsApi]] = UNSET


class Validations2Dict(TypedDict):
    fields: NotRequired[list[FieldBillV3VendorsApiDict]]
