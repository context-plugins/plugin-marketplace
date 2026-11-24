from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .mcp_scan import McpScan, McpScanDict


class McpScanResponse(SdkBaseModel):
    """Result of POST /api/v1/scan/mcp."""

    scan: McpScan
    """Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent of the site Vercel
    score."""

    share_url: str = Field(alias="shareUrl")


class McpScanResponseDict(TypedDict):
    scan: McpScanDict
    share_url: str
