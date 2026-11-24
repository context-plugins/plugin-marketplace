from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2NumbersPurchaseRequest1(SdkBaseModel):
    id: Optional[int] = UNSET
    """DID ID from numbers_index, numbers_purchase_create"""

    identity_id: Optional[int] = UNSET
    """Identity ID to associate with the number, from identities_index, identities_create"""

    call_recording_enabled: Optional[bool] = UNSET
    """Enable or disable inbound call recording for this DID"""


class ApiV2NumbersPurchaseRequest1Dict(TypedDict):
    id: NotRequired[int]
    identity_id: NotRequired[int]
    call_recording_enabled: NotRequired[bool]
