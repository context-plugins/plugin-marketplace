from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.replacement_status_instacart_connect_post_checkout_replacements_api import (
    ReplacementStatusInstacartConnectPostCheckoutReplacementsApiOrStr,
)


class ReplacementResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The order item identifier."""

    replacement_status: Optional[ReplacementStatusInstacartConnectPostCheckoutReplacementsApiOrStr] = UNSET
    """The updated replacement status."""


class ReplacementResponseDict(TypedDict):
    id: NotRequired[str]
    replacement_status: NotRequired[ReplacementStatusInstacartConnectPostCheckoutReplacementsApiOrStr]
