from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_type import AddressTypeOrStr
from .simple import Simple, SimpleDict


class Address(SdkBaseModel):
    address_type: Optional[AddressTypeOrStr] = Field(default=UNSET, alias="addressType")
    """The type of address object present."""

    simple: Optional[Simple] = UNSET


class AddressDict(TypedDict):
    address_type: NotRequired[AddressTypeOrStr]
    simple: NotRequired[SimpleDict]
