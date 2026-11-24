from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .label_stats import LabelStats, LabelStatsDict


class Label(SdkBaseModel):
    """A Label can be used to associate and filter Stories and Epics, and also create new Workspaces."""

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

    stats: Optional[LabelStats] = UNSET
    """A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List
    Labels endpoint."""

    created_at: RFC3339DateTime | None
    """The time/date that the Label was created."""


class LabelDict(TypedDict):
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
    stats: NotRequired[LabelStatsDict]
    created_at: RFC3339DateTime | None
