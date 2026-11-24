from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomateRecycleKeyJsonResponse(SdkBaseModel):
    old_key: Optional[str] = UNSET
    new_key: Optional[str] = UNSET


class AutomateRecycleKeyJsonResponseDict(TypedDict):
    old_key: NotRequired[str]
    new_key: NotRequired[str]
