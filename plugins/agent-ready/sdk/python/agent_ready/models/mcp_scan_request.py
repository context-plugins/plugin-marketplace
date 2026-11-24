from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class McpScanRequest(SdkBaseModel):
    """Body for POST /api/v1/scan/mcp. A remote http(s) MCP endpoint (Streamable HTTP)."""

    endpoint: str


class McpScanRequestDict(TypedDict):
    endpoint: str
