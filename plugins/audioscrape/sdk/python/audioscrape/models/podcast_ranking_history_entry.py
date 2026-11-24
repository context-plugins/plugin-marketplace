from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PodcastRankingHistoryEntry(SdkBaseModel):
    country_code: str
    date_checked: str
    platform: OptionalNullable[str] = UNSET
    rank: OptionalNullable[int] = UNSET


class PodcastRankingHistoryEntryDict(TypedDict):
    country_code: str
    date_checked: str
    platform: NotRequired[str | None]
    rank: NotRequired[int | None]
