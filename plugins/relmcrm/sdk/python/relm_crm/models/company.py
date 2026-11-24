from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.object1_relm_crm_companies_api import Object1RelmCrmCompaniesApiOrStr


class Company(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[Object1RelmCrmCompaniesApiOrStr] = Field(default=UNSET, alias="object")
    name: Optional[str] = UNSET
    domain: OptionalNullable[str] = UNSET
    custom_fields: Optional[Any] = UNSET
    version: Optional[int] = UNSET
    mode: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    deleted: Optional[bool] = UNSET


class CompanyDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[Object1RelmCrmCompaniesApiOrStr]
    name: NotRequired[str]
    domain: NotRequired[str | None]
    custom_fields: NotRequired[Any]
    version: NotRequired[int]
    mode: NotRequired[str]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
    deleted: NotRequired[bool]
