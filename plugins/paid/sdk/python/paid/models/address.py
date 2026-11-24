from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Address(SdkBaseModel):
    line1: str
    line2: Optional[str] = UNSET
    city: str
    state: str
    zip_code: str = Field(alias="zipCode")
    country: str


class AddressDict(TypedDict):
    line1: str
    line2: NotRequired[str]
    city: str
    state: str
    zip_code: str
    country: str
