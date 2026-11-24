from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PlanLimitsResponse(SdkBaseModel):
    data_calls_per_month: OptionalNullable[int] = UNSET
    """Monthly data-API call limit (podcasts, episodes, persons, entities, charts, trending). ``null`` means unlimited;
    ``0`` means disabled."""

    keyword_alerts: OptionalNullable[int] = UNSET
    """Maximum number of keyword alerts a user can create. ``null`` = unlimited."""

    max_api_keys: int
    searches_per_month: OptionalNullable[int] = UNSET
    """Monthly text-search limit. ``null`` means unlimited."""

    semantic_searches_per_month: OptionalNullable[int] = UNSET
    """Monthly semantic / hybrid search limit. ``null`` means unlimited; ``0`` means the feature is disabled on this
    plan."""

    storage_mb: OptionalNullable[int] = UNSET
    """Storage limit for private uploads, in megabytes. ``null`` = unlimited."""

    transcription_minutes_per_month: OptionalNullable[int] = UNSET
    """Monthly transcription quota for private uploads (in audio minutes). ``null`` = unlimited; ``0`` = uploads
    disabled."""

    webhooks_enabled: bool
    """Whether webhook delivery is enabled for keyword alerts on this plan."""


class PlanLimitsResponseDict(TypedDict):
    data_calls_per_month: NotRequired[int | None]
    keyword_alerts: NotRequired[int | None]
    max_api_keys: int
    searches_per_month: NotRequired[int | None]
    semantic_searches_per_month: NotRequired[int | None]
    storage_mb: NotRequired[int | None]
    transcription_minutes_per_month: NotRequired[int | None]
    webhooks_enabled: bool
