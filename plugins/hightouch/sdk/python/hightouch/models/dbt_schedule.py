from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account import Account, AccountDict
from .job import Job, JobDict


class DbtSchedule(SdkBaseModel):
    account: Account
    job: Job


class DbtScheduleDict(TypedDict):
    account: AccountDict
    job: JobDict
