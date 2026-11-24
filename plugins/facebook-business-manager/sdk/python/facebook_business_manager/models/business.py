from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Business(SdkBaseModel):
    """The business associated with this ad account"""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class BusinessDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
