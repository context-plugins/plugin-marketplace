from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .transfer1 import Transfer1, Transfer1Dict


class PaymentsTransfersRequest(SdkBaseModel):
    transfers: list[Transfer1]


class PaymentsTransfersRequestDict(TypedDict):
    transfers: list[Transfer1Dict]
