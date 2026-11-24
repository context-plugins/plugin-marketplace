from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Destination(SdkBaseModel):
    """The service receiving your data (e.g. Salesforce, Hubspot, Customer.io, or a SFTP server)"""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The destination's id"""

    name: str
    """The destination's name"""

    slug: str
    """The destination's slug"""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the destination belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the destination was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the destination was last updated"""

    type_: str = Field(alias="type")
    """The destination's type (e.g. salesforce or hubspot)."""

    configuration: dict[str, Any]
    """The destination's configuration. This specifies general metadata about destination, like hostname and username.
    Hightouch will be using this configuration to connect to destination.

    The schema depends on the destination type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    syncs: list[float]
    """A list of syncs that sync to this destination."""


class DestinationDict(TypedDict):
    id: float
    name: str
    slug: str
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    type_: str
    configuration: dict[str, Any]
    syncs: list[float]
