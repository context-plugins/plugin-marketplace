from __future__ import annotations

from typing import TypeAlias

from ..cron_schedule import CronSchedule, CronScheduleDict
from ..dbt_schedule import DbtSchedule, DbtScheduleDict
from ..interval_schedule import IntervalSchedule, IntervalScheduleDict
from ..visual_cron_schedule import VisualCronSchedule, VisualCronScheduleDict

Schedule1: TypeAlias = IntervalSchedule | CronSchedule | VisualCronSchedule | DbtSchedule

Schedule1Dict: TypeAlias = IntervalScheduleDict | CronScheduleDict | VisualCronScheduleDict | DbtScheduleDict
