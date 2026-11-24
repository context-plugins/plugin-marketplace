from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DestinationCreate(SdkBaseModel):
    """The input for creating a Destination"""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The destination's name"""

    slug: str
    """The destination's slug"""

    type_: str = Field(alias="type")
    """The destination's type (e.g. salesforce or hubspot)."""

    configuration: dict[str, Any]
    """The destination's configuration. This specifies general metadata about destination, like hostname and username.
    Hightouch will be using this configuration to connect to destination.

    The schema depends on the destination type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""


class DestinationCreateDict(TypedDict):
    name: str
    slug: str
    type_: str
    configuration: dict[str, Any]
