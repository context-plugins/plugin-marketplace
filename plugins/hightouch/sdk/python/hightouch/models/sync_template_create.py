from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .sync_template_override_option import SyncTemplateOverrideOption, SyncTemplateOverrideOptionDict


class SyncTemplateCreate(SdkBaseModel):
    """The input for creating a Sync Template. A ``slug`` is generated automatically from the name; it is a legacy
    column and is no longer accepted on input."""

    model_config = ConfigDict(extra="forbid")

    name: str
    description: Optional[str] = UNSET
    model_id: float = Field(alias="modelId")
    destination_id: float = Field(alias="destinationId")
    configuration: dict[str, Any]
    schedule: Optional[dict[str, Any]] = UNSET
    schedule_paused: Optional[bool] = Field(default=UNSET, alias="schedulePaused")
    matchbooster_region: OptionalNullable[str] = Field(default=UNSET, alias="matchboosterRegion")
    override_config: OptionalNullable[dict[str, SyncTemplateOverrideOption]] = Field(
        default=UNSET, alias="overrideConfig"
    )


class SyncTemplateCreateDict(TypedDict):
    name: str
    description: NotRequired[str]
    model_id: float
    destination_id: float
    configuration: dict[str, Any]
    schedule: NotRequired[dict[str, Any]]
    schedule_paused: NotRequired[bool]
    matchbooster_region: NotRequired[str | None]
    override_config: NotRequired[dict[str, SyncTemplateOverrideOptionDict] | None]
