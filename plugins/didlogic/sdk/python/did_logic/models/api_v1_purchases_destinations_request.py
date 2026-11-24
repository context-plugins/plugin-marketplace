from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .destination1 import Destination1, Destination1Dict


class ApiV1PurchasesDestinationsRequest(SdkBaseModel):
    destination: Destination1


class ApiV1PurchasesDestinationsRequestDict(TypedDict):
    destination: Destination1Dict
