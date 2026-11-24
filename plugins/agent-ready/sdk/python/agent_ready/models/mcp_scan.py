from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .check_result import CheckResult, CheckResultDict
from .enums.mcp_rating import McpRatingOrStr
from .enums.status1 import Status1OrStr


class McpScan(SdkBaseModel):
    """Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent of the site Vercel
    score."""

    id: str
    share_token: str = Field(alias="shareToken")
    endpoint: str
    host: str
    status: Status1OrStr
    mcp_score: int = Field(alias="mcpScore")
    mcp_rating: McpRatingOrStr = Field(alias="mcpRating")
    """Coarse rating bucket derived from the Vercel Agent Readability score."""

    server_name: str | None = Field(alias="serverName")
    server_version: str | None = Field(alias="serverVersion")
    tool_count: int | None = Field(alias="toolCount")
    resource_count: int | None = Field(alias="resourceCount")
    prompt_count: int | None = Field(alias="promptCount")
    checks: list[CheckResult]


class McpScanDict(TypedDict):
    id: str
    share_token: str
    endpoint: str
    host: str
    status: Status1OrStr
    mcp_score: int
    mcp_rating: McpRatingOrStr
    server_name: str | None
    server_version: str | None
    tool_count: int | None
    resource_count: int | None
    prompt_count: int | None
    checks: list[CheckResultDict]
