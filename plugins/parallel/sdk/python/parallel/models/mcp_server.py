from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1, Type1OrStr


class McpServer(SdkBaseModel):
    """MCP server configuration."""

    type_: Type1OrStr = Field(default=Type1.URL, alias="type")
    """Type of MCP server being configured. Always ``url``."""

    url: str
    """URL of the MCP server."""

    headers: Optional[dict[str, str]] = UNSET
    """Headers for the MCP server."""

    name: str
    """Name of the MCP server."""

    allowed_tools: Optional[list[str]] = UNSET
    """List of allowed tools for the MCP server."""


class McpServerDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    url: str
    headers: NotRequired[dict[str, str]]
    name: str
    allowed_tools: NotRequired[list[str]]
