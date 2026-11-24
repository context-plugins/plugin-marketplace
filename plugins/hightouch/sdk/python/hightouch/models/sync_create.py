from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schedule import Schedule, ScheduleDict


class SyncCreate(SdkBaseModel):
    """The input for creating a Sync.

    A sync either owns its configuration (``destinationId`` and ``configuration`` are required) or is created from a
    sync template (``syncTemplateId`` is required, ``configuration`` must be omitted and this sync's own values go in
    ``syncTemplateOverrides``)."""

    model_config = ConfigDict(extra="forbid")

    slug: str
    """The sync's slug"""

    model_id: float = Field(alias="modelId")
    """The id of the Model that sync is connected to"""

    schedule: Schedule | None
    """The scheduling configuration. It can be triggered based on several ways:

    Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)

    Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.

    Visual: the sync will be triggered based a visual cron configuration on UI

    DBT-cloud: the sync will be triggered based on a dbt cloud job

    Match Booster (type "match_booster"): the sync will be triggered after each Match Booster enrichment run of its
    model completes. Requires the model to have Match Booster enabled, and takes no inner schedule payload."""

    disabled: bool
    """Whether the sync has been disabled by the user."""

    destination_id: Optional[float] = Field(default=UNSET, alias="destinationId")
    """The id of the Destination that sync is connected to. Required unless ``syncTemplateId`` is provided: a sync
    created from a sync template always uses the template's destination, and this field, when provided, must match
    it."""

    configuration: Optional[dict[str, Any]] = UNSET
    """The sync's configuration. This specifies how data is mapped, among other configuration. The schema depends on the
    destination type.

    Required unless ``syncTemplateId`` is provided, in which case it must be omitted: the template provides the
    configuration and this sync's own values go in ``syncTemplateOverrides``."""

    sync_template_id: Optional[float] = Field(default=UNSET, alias="syncTemplateId")
    """The id of the Sync Template to create the sync from. The sync inherits the template's destination and
    configuration and follows later changes to the template. A null ``schedule`` inherits the template's schedule; a
    schedule given here belongs to the sync. ``modelId`` must be the template's model or an audience built on it."""

    sync_template_overrides: Optional[dict[str, Any]] = Field(default=UNSET, alias="syncTemplateOverrides")
    """Values this sync sets for the template's overridable fields, keyed by configuration field path (for example
    "externalIdMapping" or "target.schema"). Only fields the template's ``overrideConfig`` marks as overridable are
    accepted. Requires ``syncTemplateId``."""


class SyncCreateDict(TypedDict):
    slug: str
    model_id: float
    schedule: ScheduleDict | None
    disabled: bool
    destination_id: NotRequired[float]
    configuration: NotRequired[dict[str, Any]]
    sync_template_id: NotRequired[float]
    sync_template_overrides: NotRequired[dict[str, Any]]
