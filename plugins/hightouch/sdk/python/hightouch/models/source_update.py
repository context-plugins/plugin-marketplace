from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceUpdate(SdkBaseModel):
    """The input for updating a Source"""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The source's name"""

    configuration: Optional[dict[str, Any]] = UNSET
    """The source's configuration. This specifies general metadata about sources, like connection details Hightouch will
    use this configuration to connect to underlying source.

    The schema depends on the source type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""


class SourceUpdateDict(TypedDict):
    name: NotRequired[str]
    configuration: NotRequired[dict[str, Any]]
