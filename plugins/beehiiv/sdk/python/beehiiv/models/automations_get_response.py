from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation import Automation, AutomationDict


class AutomationsGetResponse(SdkBaseModel):
    data: Optional[Automation] = UNSET


class AutomationsGetResponseDict(TypedDict):
    data: NotRequired[AutomationDict]
