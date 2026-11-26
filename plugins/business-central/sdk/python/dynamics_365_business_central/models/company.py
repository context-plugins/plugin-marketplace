from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Company(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    business_profile_id: Optional[str] = Field(default=UNSET, alias="businessProfileId")


class CompanyDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    display_name: NotRequired[str]
    business_profile_id: NotRequired[str]
