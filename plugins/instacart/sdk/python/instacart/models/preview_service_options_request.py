from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address import Address, AddressDict


class PreviewServiceOptionsRequest(SdkBaseModel):
    store_id: Optional[str] = UNSET
    """The unique identifier of the store to preview service options for."""

    address: Optional[Address] = UNSET
    """The delivery or pickup address."""


class PreviewServiceOptionsRequestDict(TypedDict):
    store_id: NotRequired[str]
    address: NotRequired[AddressDict]
