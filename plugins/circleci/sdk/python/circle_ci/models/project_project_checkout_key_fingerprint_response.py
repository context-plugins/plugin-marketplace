from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectProjectCheckoutKeyFingerprintResponse(SdkBaseModel):
    message: Optional[str] = UNSET
    """Confirmation message"""


class ProjectProjectCheckoutKeyFingerprintResponseDict(TypedDict):
    message: NotRequired[str]
