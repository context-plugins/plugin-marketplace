from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1PayloadOperation(SdkBaseModel):
    """Represents a single operation identifier extracted from the request payload."""

    operation: Optional[str] = UNSET
    """Required. The operation name extracted from the request payload at runtime by the ParsePayload policy. For
    example, for MCP protocol requests, this could be ``"tools/list"`` or ``"tools/call/get_weather"``. Wildcards are
    not supported."""


class GoogleCloudApigeeV1PayloadOperationDict(TypedDict):
    operation: NotRequired[str]
