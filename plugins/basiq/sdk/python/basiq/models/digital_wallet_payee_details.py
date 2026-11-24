from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.provider import ProviderOrStr
from .enums.type_platform_payees_api import TypePlatformPayeesApiOrStr


class DigitalWalletPayeeDetails(SdkBaseModel):
    """Details specific to digital wallet payees."""

    name: Optional[str] = UNSET
    """The name associated with the digital wallet."""

    identifier: Optional[str] = UNSET
    """The identifier for the digital wallet (email, phone, etc.)."""

    type_: Optional[TypePlatformPayeesApiOrStr] = Field(default=UNSET, alias="type")
    """The type of identifier."""

    provider: Optional[ProviderOrStr] = UNSET
    """The digital wallet provider."""


class DigitalWalletPayeeDetailsDict(TypedDict):
    name: NotRequired[str]
    identifier: NotRequired[str]
    type_: NotRequired[TypePlatformPayeesApiOrStr]
    provider: NotRequired[ProviderOrStr]
