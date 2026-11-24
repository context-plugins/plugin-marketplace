from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .sync_template_override_option import SyncTemplateOverrideOption, SyncTemplateOverrideOptionDict


class SyncTemplate(SdkBaseModel):
    """A sync template defines a reusable sync configuration that can be shared across multiple syncs. User Groups can
    be granted access to templates so users can create syncs from them without seeing the raw destination
    credentials."""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The sync template's id"""

    name: str
    """The sync template's name"""

    description: OptionalNullable[str] = UNSET
    """The sync template's description"""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the sync template belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the sync template was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the sync template was last updated"""

    model_id: float = Field(alias="modelId")
    """The id of the parent Model that the sync template is connected to"""

    destination_id: float = Field(alias="destinationId")
    """The id of the Destination that the sync template is connected to. Cannot be changed after creation."""

    configuration: dict[str, Any]
    """The sync template's configuration. The schema depends on the destination type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    schedule: dict[str, Any] | None
    """The sync template's schedule. May be null if the template does not impose a schedule on its child syncs."""

    schedule_paused: bool = Field(alias="schedulePaused")
    """Whether the sync template's schedule is paused"""

    tags: dict[str, str]
    """The tags of the sync template"""

    matchbooster_region: OptionalNullable[str] = Field(default=UNSET, alias="matchboosterRegion")
    """Match Booster region for syncs created from this template. Null means inherit the model's single-region default
    at runtime."""

    override_config: dict[str, SyncTemplateOverrideOption] | None = Field(alias="overrideConfig")
    """Which configuration fields syncs created from this template may override, keyed by configuration field path (for
    example "externalIdMapping" or "target.schema"). A field is unlocked when listed with ``overridable: true``; every
    other field is locked to the template's value. Null when no field is overridable."""


class SyncTemplateDict(TypedDict):
    id: float
    name: str
    description: NotRequired[str | None]
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    model_id: float
    destination_id: float
    configuration: dict[str, Any]
    schedule: dict[str, Any] | None
    schedule_paused: bool
    tags: dict[str, str]
    matchbooster_region: NotRequired[str | None]
    override_config: dict[str, SyncTemplateOverrideOptionDict] | None
