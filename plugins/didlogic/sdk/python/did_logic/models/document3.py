from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Document3(SdkBaseModel):
    name: Optional[str] = UNSET
    """Updated document name"""

    identity_id: Optional[int] = UNSET
    """Updated identity ID from identities_index, identities_create"""


class Document3Dict(TypedDict):
    name: NotRequired[str]
    identity_id: NotRequired[int]
