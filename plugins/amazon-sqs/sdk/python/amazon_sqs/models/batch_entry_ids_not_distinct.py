from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchEntryIdsNotDistinct(SdkBaseModel):
    message: Optional[str] = UNSET


class BatchEntryIdsNotDistinctDict(TypedDict):
    message: NotRequired[str]
