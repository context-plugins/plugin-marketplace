from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .corporate_action_data import CorporateActionData, CorporateActionDataDict
from .enums.status import StatusOrStr


class CorporateActionsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[CorporateActionData]] = UNSET


class CorporateActionsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[CorporateActionDataDict]]
