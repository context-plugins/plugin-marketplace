from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomateProjectsJsonRequest(SdkBaseModel):
    name: Optional[str] = UNSET


class AutomateProjectsJsonRequestDict(TypedDict):
    name: NotRequired[str]
