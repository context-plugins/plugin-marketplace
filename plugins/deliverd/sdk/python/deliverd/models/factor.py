from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_deliverd_dev_approvals_api import StatusDeliverdDevApprovalsApi, StatusDeliverdDevApprovalsApiOrStr


class Factor(SdkBaseModel):
    label: str
    status: StatusDeliverdDevApprovalsApiOrStr = StatusDeliverdDevApprovalsApi.INFO
    detail: Optional[str] = UNSET


class FactorDict(TypedDict):
    label: str
    status: NotRequired[StatusDeliverdDevApprovalsApiOrStr]
    detail: NotRequired[str]
