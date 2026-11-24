from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .company import Company, CompanyDict
from .enums.object_relm_crm_companies_api import ObjectRelmCrmCompaniesApiOrStr


class CompanyList(SdkBaseModel):
    object_: Optional[ObjectRelmCrmCompaniesApiOrStr] = Field(default=UNSET, alias="object")
    has_more: Optional[bool] = UNSET
    next_cursor: OptionalNullable[str] = UNSET
    data: Optional[list[Company]] = UNSET


class CompanyListDict(TypedDict):
    object_: NotRequired[ObjectRelmCrmCompaniesApiOrStr]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str | None]
    data: NotRequired[list[CompanyDict]]
