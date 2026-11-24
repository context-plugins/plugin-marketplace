from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class IncompleteDetails(SdkBaseModel):
    """Details about why the response is incomplete."""

    reason: Optional[ReasonOrStr] = UNSET


class IncompleteDetailsDict(TypedDict):
    reason: NotRequired[ReasonOrStr]
