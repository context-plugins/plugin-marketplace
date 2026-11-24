from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SourceCreate(SdkBaseModel):
    """The input for creating a Source"""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The source's name"""

    slug: str
    """The source's slug"""

    type_: str = Field(alias="type")
    """The source's type (e.g. snowflake or postgres)."""

    configuration: dict[str, Any]
    """The source's configuration. This specifies general metadata about sources, like connection details Hightouch will
    use this configuration to connect to underlying source.

    The schema depends on the source type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""


class SourceCreateDict(TypedDict):
    name: str
    slug: str
    type_: str
    configuration: dict[str, Any]
