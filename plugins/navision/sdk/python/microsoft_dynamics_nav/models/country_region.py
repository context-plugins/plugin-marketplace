from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CountryRegion(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    address_format: Optional[str] = Field(default=UNSET, alias="addressFormat")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class CountryRegionDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
    address_format: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
