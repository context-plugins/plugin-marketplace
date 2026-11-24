from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_platform_payees_api import Type1PlatformPayeesApiOrStr


class PayId(SdkBaseModel):
    """PayID details for domestic payee."""

    name: Optional[str] = UNSET
    """The name associated with the PayID."""

    identifier: Optional[str] = UNSET
    """The PayID identifier (email, phone, ABN, etc.)."""

    type_: Optional[Type1PlatformPayeesApiOrStr] = Field(default=UNSET, alias="type")
    """The type of PayID identifier."""


class PayIdDict(TypedDict):
    name: NotRequired[str]
    identifier: NotRequired[str]
    type_: NotRequired[Type1PlatformPayeesApiOrStr]
