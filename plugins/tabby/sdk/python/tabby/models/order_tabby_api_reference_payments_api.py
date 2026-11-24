from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrderTabbyApiReferencePaymentsApi(SdkBaseModel):
    reference_id: Optional[str] = UNSET
    """Merchant-assigned order or cart ID."""


class OrderTabbyApiReferencePaymentsApiDict(TypedDict):
    reference_id: NotRequired[str]
