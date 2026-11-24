from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .sync_template_override_option import SyncTemplateOverrideOption, SyncTemplateOverrideOptionDict


class SyncTemplateUpdate(SdkBaseModel):
    """The input for updating a Sync Template. ``destinationId`` cannot be changed after creation."""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The sync template's name"""

    configuration: Optional[dict[str, Any]] = UNSET
    """The sync template's configuration. The schema depends on the destination type.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    description: OptionalNullable[str] = UNSET
    """The sync template's description"""

    model_id: Optional[float] = Field(default=UNSET, alias="modelId")
    """The id of the parent Model that the sync template is connected to"""

    schedule: OptionalNullable[dict[str, Any]] = UNSET
    """The sync template's schedule. May be null if the template does not impose a schedule on its child syncs."""

    schedule_paused: Optional[bool] = Field(default=UNSET, alias="schedulePaused")
    """Whether the sync template's schedule is paused"""

    tags: Optional[dict[str, str]] = UNSET
    """The tags of the sync template"""

    matchbooster_region: OptionalNullable[str] = Field(default=UNSET, alias="matchboosterRegion")
    """Match Booster region for syncs created from this template. Null means inherit the model's single-region default
    at runtime."""

    override_config: OptionalNullable[dict[str, SyncTemplateOverrideOption]] = Field(
        default=UNSET, alias="overrideConfig"
    )
    """Which configuration fields syncs created from this template may override, keyed by configuration field path (for
    example "externalIdMapping" or "target.schema"). A field is unlocked when listed with ``overridable: true``; every
    other field is locked to the template's value. Null when no field is overridable."""


class SyncTemplateUpdateDict(TypedDict):
    name: NotRequired[str]
    configuration: NotRequired[dict[str, Any]]
    description: NotRequired[str | None]
    model_id: NotRequired[float]
    schedule: NotRequired[dict[str, Any] | None]
    schedule_paused: NotRequired[bool]
    tags: NotRequired[dict[str, str]]
    matchbooster_region: NotRequired[str | None]
    override_config: NotRequired[dict[str, SyncTemplateOverrideOptionDict] | None]
