from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Source(SdkBaseModel):
    """The database or warehouse where your data is stored. The starting point for a Hightouch data pipeline."""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The source's id"""

    name: str
    """The source's name"""

    slug: str
    """The source's slug"""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the source belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the source was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the source was last updated"""

    configuration: dict[str, Any]
    """The source's configuration. This specifies general metadata about sources, like connection details Hightouch will
    use this configuration to connect to underlying source.

    The schema depends on the source type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    type_: str = Field(alias="type")
    """The source's type (e.g. snowflake or postgres)."""


class SourceDict(TypedDict):
    id: float
    name: str
    slug: str
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    configuration: dict[str, Any]
    type_: str
