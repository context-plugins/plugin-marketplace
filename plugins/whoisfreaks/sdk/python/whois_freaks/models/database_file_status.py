from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .database_updates import DatabaseUpdates, DatabaseUpdatesDict
from .date_range_status import DateRangeStatus, DateRangeStatusDict
from .newly_status import NewlyStatus, NewlyStatusDict
from .threat_feed_status import ThreatFeedStatus, ThreatFeedStatusDict


class DatabaseFileStatus(SdkBaseModel):
    newly: Optional[NewlyStatus] = UNSET
    expired: Optional[DateRangeStatus] = UNSET
    cleaned_expired: Optional[DateRangeStatus] = UNSET
    dropped: Optional[DateRangeStatus] = UNSET
    dropped_with_backlinks: Optional[DateRangeStatus] = UNSET
    threat_feed: Optional[ThreatFeedStatus] = UNSET
    database_updates: Optional[DatabaseUpdates] = UNSET


class DatabaseFileStatusDict(TypedDict):
    newly: NotRequired[NewlyStatusDict]
    expired: NotRequired[DateRangeStatusDict]
    cleaned_expired: NotRequired[DateRangeStatusDict]
    dropped: NotRequired[DateRangeStatusDict]
    dropped_with_backlinks: NotRequired[DateRangeStatusDict]
    threat_feed: NotRequired[ThreatFeedStatusDict]
    database_updates: NotRequired[DatabaseUpdatesDict]
