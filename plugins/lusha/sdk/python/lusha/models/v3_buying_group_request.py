from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.persona import PersonaOrStr
from .pagination import Pagination, PaginationDict
from .v3_buying_group_company_item import V3BuyingGroupCompanyItem, V3BuyingGroupCompanyItemDict


class V3BuyingGroupRequest(SdkBaseModel):
    companies: list[V3BuyingGroupCompanyItem]
    personas: Optional[list[PersonaOrStr]] = UNSET
    """Filter results to specific persona roles. Omit to return all three."""

    contacts_limit: int = Field(default=60, alias="contactsLimit")
    """Maximum number of contacts returned per company."""

    pagination: Optional[Pagination] = UNSET
    """Optional. If omitted, defaults to page 0, size 100."""


class V3BuyingGroupRequestDict(TypedDict):
    companies: list[V3BuyingGroupCompanyItemDict]
    personas: NotRequired[list[PersonaOrStr]]
    contacts_limit: NotRequired[int]
    pagination: NotRequired[PaginationDict]
