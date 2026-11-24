from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_archbee_public_api_reference_api import Status1ArchbeePublicApiReferenceApiOrStr


class DocsSearch400Error1(SdkBaseModel):
    status: Optional[Status1ArchbeePublicApiReferenceApiOrStr] = UNSET
    """Response Status"""

    messages: Optional[list[str]] = UNSET
    """Array of messages"""


class DocsSearch400Error1Dict(TypedDict):
    status: NotRequired[Status1ArchbeePublicApiReferenceApiOrStr]
    messages: NotRequired[list[str]]
