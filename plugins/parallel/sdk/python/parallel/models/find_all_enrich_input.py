from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_schema2 import JsonSchema2, JsonSchema2Dict
from .mcp_server import McpServer, McpServerDict


class FindAllEnrichInput(SdkBaseModel):
    """Input model for FindAll enrich."""

    processor: str = "core"
    """Processor to use for the task."""

    output_schema: JsonSchema2
    """JSON schema for the enrichment output schema for the FindAll run."""

    mcp_servers: Optional[list[McpServer]] = UNSET
    """List of MCP servers to use for the task."""


class FindAllEnrichInputDict(TypedDict):
    processor: NotRequired[str]
    output_schema: JsonSchema2Dict
    mcp_servers: NotRequired[list[McpServerDict]]
