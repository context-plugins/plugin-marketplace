from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .destination2 import Destination2, Destination2Dict


class ApiV1PurchasesDestinationsRequest1(SdkBaseModel):
    destination: Optional[Destination2] = UNSET


class ApiV1PurchasesDestinationsRequest1Dict(TypedDict):
    destination: NotRequired[Destination2Dict]
