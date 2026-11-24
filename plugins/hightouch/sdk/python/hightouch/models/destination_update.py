from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DestinationUpdate(SdkBaseModel):
    """The input for updating a Destination"""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The destination's name"""

    configuration: Optional[dict[str, Any]] = UNSET
    """The destination's configuration. This specifies general metadata about destination, like hostname and username.
    Hightouch will be using this configuration to connect to destination.

    The schema depends on the destination type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""


class DestinationUpdateDict(TypedDict):
    name: NotRequired[str]
    configuration: NotRequired[dict[str, Any]]
