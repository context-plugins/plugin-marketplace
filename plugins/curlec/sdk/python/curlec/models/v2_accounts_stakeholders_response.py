from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .partner_stakeholder import PartnerStakeholder, PartnerStakeholderDict


class V2AccountsStakeholdersResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[PartnerStakeholder]] = UNSET


class V2AccountsStakeholdersResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[PartnerStakeholderDict]]
