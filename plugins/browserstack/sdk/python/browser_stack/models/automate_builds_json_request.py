from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomateBuildsJsonRequest(SdkBaseModel):
    name: Optional[str] = UNSET


class AutomateBuildsJsonRequestDict(TypedDict):
    name: NotRequired[str]
