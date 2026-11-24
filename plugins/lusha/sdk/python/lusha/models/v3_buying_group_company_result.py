from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_buying_group_contact import V3BuyingGroupContact, V3BuyingGroupContactDict
from .v3_item_error import V3ItemError, V3ItemErrorDict


class V3BuyingGroupCompanyResult(SdkBaseModel):
    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    contacts: Optional[list[V3BuyingGroupContact]] = UNSET
    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""


class V3BuyingGroupCompanyResultDict(TypedDict):
    client_reference_id: NotRequired[str]
    company_id: NotRequired[str]
    contacts: NotRequired[list[V3BuyingGroupContactDict]]
    error: NotRequired[V3ItemErrorDict]
