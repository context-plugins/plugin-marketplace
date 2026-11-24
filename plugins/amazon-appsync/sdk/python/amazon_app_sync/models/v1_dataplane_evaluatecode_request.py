from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_sync_runtime import AppSyncRuntime, AppSyncRuntimeDict


class V1DataplaneEvaluatecodeRequest(SdkBaseModel):
    runtime: AppSyncRuntime
    code: str
    """The code definition to be evaluated. Note that code and runtime are both required for this action. The runtime
    value must be APPSYNC_JS."""

    context: str
    """The map that holds all of the contextual information for your resolver invocation. A context is required for this
    action."""

    function: Optional[str] = UNSET
    """The function within the code to be evaluated. If provided, the valid values are request and response."""


class V1DataplaneEvaluatecodeRequestDict(TypedDict):
    runtime: AppSyncRuntimeDict
    code: str
    context: str
    function: NotRequired[str]
