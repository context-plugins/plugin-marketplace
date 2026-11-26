from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address_dto import AddressDto, AddressDtoDict
from .enums.network_account_type import NetworkAccountTypeOrStr
from .managed_by import ManagedBy, ManagedByDict


class Network(SdkBaseModel):
    """An organization in the BILL network or verified national vendor network."""

    id: Optional[str] = UNSET
    """Payment Network ID (PNI) of the organization. BILL uses the PNI to send and receive electronic payments."""

    name: Optional[str] = UNSET
    """Organization name"""

    type_: Optional[NetworkAccountTypeOrStr] = Field(default=UNSET, alias="type")
    addresses: Optional[list[AddressDto]] = UNSET
    """Organization address"""

    managed_by: Optional[ManagedBy] = Field(default=UNSET, alias="managedBy")


class NetworkDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[NetworkAccountTypeOrStr]
    addresses: NotRequired[list[AddressDtoDict]]
    managed_by: NotRequired[ManagedByDict]
