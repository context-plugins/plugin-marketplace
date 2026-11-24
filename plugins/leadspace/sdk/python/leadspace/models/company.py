from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_address import EnrichedAddress, EnrichedAddressDict
from .enums.type import TypeOrStr


class Company(SdkBaseModel):
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    ls_id: Optional[str] = UNSET
    website: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    sic: Optional[str] = UNSET
    naics: Optional[str] = UNSET
    address: Optional[EnrichedAddress] = UNSET


class CompanyDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    name: NotRequired[str]
    ls_id: NotRequired[str]
    website: NotRequired[str]
    phone: NotRequired[str]
    sic: NotRequired[str]
    naics: NotRequired[str]
    address: NotRequired[EnrichedAddressDict]
