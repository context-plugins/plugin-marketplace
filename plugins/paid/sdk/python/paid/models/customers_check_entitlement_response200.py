from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomersCheckEntitlementResponse200(SdkBaseModel):
    entitled: bool
    """Whether the customer is entitled to the specified event"""


class CustomersCheckEntitlementResponse200Dict(TypedDict):
    entitled: bool
