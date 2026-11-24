from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.sync_status2 import SyncStatus2OrStr
from .external_segment import ExternalSegment, ExternalSegmentDict
from .schedule import Schedule, ScheduleDict
from .user_reference import UserReference, UserReferenceDict


class Sync(SdkBaseModel):
    """Syncs define how data from models are mapped to destinations. Each time a sync runs, Hightouch calculates the
    rows that have changed since the last run, and syncs them to Sync's destination."""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The sync's id"""

    slug: str
    """The sync's slug"""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the sync belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the sync was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the sync was last updated"""

    created_by: UserReference = Field(alias="createdBy")
    """The user who created the sync, or null if no user was recorded"""

    updated_by: UserReference = Field(alias="updatedBy")
    """The user who last updated the sync, or null if no user was recorded"""

    destination_id: float = Field(alias="destinationId")
    """The id of the Destination that sync is connected to"""

    model_id: float = Field(alias="modelId")
    """The id of the Model that sync is connected to"""

    configuration: dict[str, Any]
    """The sync's configuration. This specifies how data is mapped, among other configuration.

    The schema depends on the destination type.

    For a sync bound to a sync template this is the effective configuration: the template's configuration with this
    sync's ``syncTemplateOverrides`` applied.

    Consumers should NOT make assumptions on the contents of the configuration. It may change as Hightouch updates its
    internal code."""

    schedule: Schedule | None
    """The scheduling configuration. It can be triggered based on several ways:

    Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)

    Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.

    Visual: the sync will be triggered based a visual cron configuration on UI

    DBT-cloud: the sync will be triggered based on a dbt cloud job

    Match Booster (type "match_booster"): the sync will be triggered after each Match Booster enrichment run of its
    model completes. Requires the model to have Match Booster enabled, and takes no inner schedule payload."""

    status: SyncStatus2OrStr
    """The overall status of the sync"""

    disabled: bool
    """Whether the sync has been disabled by the user."""

    last_run_at: RFC3339DateTime | None = Field(alias="lastRunAt")
    """The timestamp of the last sync run"""

    referenced_columns: list[str] = Field(alias="referencedColumns")
    """The reference column that sync depends on to sync data from source"""

    primary_key: str = Field(alias="primaryKey")
    """The primary key that sync uses to identify data from source"""

    external_segment: ExternalSegment = Field(alias="externalSegment")
    """The user facing ID for any created lists or audiences in the sync destination"""

    tags: dict[str, str]
    """The tags of the sync"""

    sync_template_id: float | None = Field(alias="syncTemplateId")
    """The id of the sync template this sync is bound to, or null when the sync owns its configuration. A bound sync
    takes its destination and configuration from the template and follows later changes to the template;
    ``configuration`` is the effective merged configuration and ``syncTemplateOverrides`` holds this sync's own
    values."""

    sync_template_overrides: dict[str, Any] | None = Field(alias="syncTemplateOverrides")
    """The template configuration fields this sync overrides, keyed by configuration field path (for example
    "externalIdMapping" or "target.schema"). Null when the sync is not bound to a sync template or has no overrides."""


class SyncDict(TypedDict):
    id: float
    slug: str
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    created_by: UserReferenceDict
    updated_by: UserReferenceDict
    destination_id: float
    model_id: float
    configuration: dict[str, Any]
    schedule: ScheduleDict | None
    status: SyncStatus2OrStr
    disabled: bool
    last_run_at: RFC3339DateTime | None
    referenced_columns: list[str]
    primary_key: str
    external_segment: ExternalSegmentDict
    tags: dict[str, str]
    sync_template_id: float | None
    sync_template_overrides: dict[str, Any] | None
