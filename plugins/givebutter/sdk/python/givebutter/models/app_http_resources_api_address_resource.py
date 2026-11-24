from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class AppHttpResourcesApiAddressResource(SdkBaseModel):
    address_1: str
    address_2: str | None
    city: str
    state: str | None
    zipcode: str | None
    country: str
    type_: str = Field(alias="type")
    is_primary: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None


class AppHttpResourcesApiAddressResourceDict(TypedDict):
    address_1: str
    address_2: str | None
    city: str
    state: str | None
    zipcode: str | None
    country: str
    type_: str
    is_primary: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
