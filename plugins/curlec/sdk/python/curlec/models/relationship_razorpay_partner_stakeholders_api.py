from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RelationshipRazorpayPartnerStakeholdersApi(SdkBaseModel):
    director: Optional[bool] = UNSET
    executive: Optional[bool] = UNSET


class RelationshipRazorpayPartnerStakeholdersApiDict(TypedDict):
    director: NotRequired[bool]
    executive: NotRequired[bool]
