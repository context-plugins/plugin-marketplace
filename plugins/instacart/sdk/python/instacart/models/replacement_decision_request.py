from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_instacart_connect_post_checkout_replacements_api import (
    StatusInstacartConnectPostCheckoutReplacementsApiOrStr,
)


class ReplacementDecisionRequest(SdkBaseModel):
    status: StatusInstacartConnectPostCheckoutReplacementsApiOrStr
    """The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines the replacement
    and triggers an automatic refund."""


class ReplacementDecisionRequestDict(TypedDict):
    status: StatusInstacartConnectPostCheckoutReplacementsApiOrStr
