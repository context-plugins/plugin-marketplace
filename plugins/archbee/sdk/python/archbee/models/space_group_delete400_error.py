from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_archbee_public_api_reference_api import Status1ArchbeePublicApiReferenceApiOrStr


class SpaceGroupDelete400Error(SdkBaseModel):
    status: Optional[Status1ArchbeePublicApiReferenceApiOrStr] = UNSET
    """Response Status"""

    messages: Optional[list[str]] = UNSET
    """Array of messages"""


class SpaceGroupDelete400ErrorDict(TypedDict):
    status: NotRequired[Status1ArchbeePublicApiReferenceApiOrStr]
    messages: NotRequired[list[str]]
