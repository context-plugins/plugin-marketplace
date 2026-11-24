from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .schedule import Schedule, ScheduleDict


class SyncUpdate(SdkBaseModel):
    """The input for updating a Sync"""

    model_config = ConfigDict(extra="forbid")

    configuration: Optional[dict[str, Any]] = UNSET
    """The sync's configuration. This specifies how data is mapped, among other configuration.

    The schema depends on the destination type.

    For a sync bound to a sync template this is the effective configuration: the template's configuration with this
    sync's ``syncTemplateOverrides`` applied.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    schedule: OptionalNullable[Schedule] = UNSET
    """The scheduling configuration. It can be triggered based on several ways:

    Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)

    Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.

    Visual: the sync will be triggered based a visual cron configuration on UI

    DBT-cloud: the sync will be triggered based on a dbt cloud job

    Match Booster (type "match_booster"): the sync will be triggered after each Match Booster enrichment run of its
    model completes. Requires the model to have Match Booster enabled, and takes no inner schedule payload."""

    disabled: Optional[bool] = UNSET
    """Whether the sync has been disabled by the user."""

    sync_template_id: OptionalNullable[float] = Field(default=UNSET, alias="syncTemplateId")
    """The id of a Sync Template to bind the sync to, or null to detach the sync from its template. Binding requires the
    template's destination to match the sync's destination; while bound, the sync follows the template's configuration
    and ``configuration`` cannot be set directly. Detaching copies the sync's effective configuration, schedule and
    other inherited settings onto the sync so it keeps running unchanged."""

    sync_template_overrides: OptionalNullable[dict[str, Any]] = Field(default=UNSET, alias="syncTemplateOverrides")
    """Replaces the sync's template overrides, keyed by configuration field path. Only fields the template's
    ``overrideConfig`` marks as overridable are accepted; null clears every override. Requires the sync to be, or to
    become, bound to a sync template."""


class SyncUpdateDict(TypedDict):
    configuration: NotRequired[dict[str, Any]]
    schedule: NotRequired[ScheduleDict | None]
    disabled: NotRequired[bool]
    sync_template_id: NotRequired[float | None]
    sync_template_overrides: NotRequired[dict[str, Any] | None]
