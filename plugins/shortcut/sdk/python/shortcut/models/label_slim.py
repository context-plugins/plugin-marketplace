from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class LabelSlim(SdkBaseModel):
    """A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A slim Label does
    not include aggregate stats. Fetch the Label using the labels endpoint to retrieve them."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Label."""

    description: str | None
    """The description of the Label."""

    archived: bool
    """A true/false boolean indicating if the Label has been archived."""

    entity_type: str
    """A string description of this resource."""

    color: str | None
    """The hex color to be displayed with the Label (for example, "#ff0000")."""

    name: str
    """The name of the Label."""

    global_id: str
    updated_at: RFC3339DateTime | None
    """The time/date that the Label was updated."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Label has been imported from another tool, the
    ID in the other tool can be indicated here."""

    id: int
    """The unique ID of the Label."""

    created_at: RFC3339DateTime | None
    """The time/date that the Label was created."""


class LabelSlimDict(TypedDict):
    app_url: str
    description: str | None
    archived: bool
    entity_type: str
    color: str | None
    name: str
    global_id: str
    updated_at: RFC3339DateTime | None
    external_id: str | None
    id: int
    created_at: RFC3339DateTime | None
