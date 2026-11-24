from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict
from .v3_billing import V3Billing, V3BillingDict


class ColumnsRunResponse(SdkBaseModel):
    """Run is asynchronous — this response confirms the run was accepted. Poll Get Table for per-column row-status
    counts to know when it's finished."""

    data: Optional[Data] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class ColumnsRunResponseDict(TypedDict):
    data: NotRequired[DataDict]
    billing: NotRequired[V3BillingDict]
