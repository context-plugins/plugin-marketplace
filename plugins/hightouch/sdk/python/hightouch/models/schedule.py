from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.schedule1 import Schedule1, Schedule1Dict


class Schedule(SdkBaseModel):
    """The scheduling configuration. It can be triggered based on several ways:

    Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)

    Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.

    Visual: the sync will be triggered based a visual cron configuration on UI

    DBT-cloud: the sync will be triggered based on a dbt cloud job

    Match Booster (type "match_booster"): the sync will be triggered after each Match Booster enrichment run of its
    model completes. Requires the model to have Match Booster enabled, and takes no inner schedule payload."""

    schedule: Optional[Schedule1] = UNSET
    type_: str = Field(alias="type")


class ScheduleDict(TypedDict):
    schedule: NotRequired[Schedule1Dict]
    type_: str
