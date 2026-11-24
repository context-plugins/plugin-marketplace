from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_browser_stack_automate_rest_sessions_api import StatusBrowserStackAutomateRestSessionsApiOrStr


class AutomateSessionsJsonRequest(SdkBaseModel):
    status: Optional[StatusBrowserStackAutomateRestSessionsApiOrStr] = UNSET
    reason: Optional[str] = UNSET
    name: Optional[str] = UNSET


class AutomateSessionsJsonRequestDict(TypedDict):
    status: NotRequired[StatusBrowserStackAutomateRestSessionsApiOrStr]
    reason: NotRequired[str]
    name: NotRequired[str]
