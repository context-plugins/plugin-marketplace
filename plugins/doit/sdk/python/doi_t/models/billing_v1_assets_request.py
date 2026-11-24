from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BillingV1AssetsRequest(SdkBaseModel):
    quantity: Optional[int] = UNSET


class BillingV1AssetsRequestDict(TypedDict):
    quantity: NotRequired[int]
