from __future__ import annotations

from typing import TypeAlias

from ..job_completed import JobCompleted, JobCompletedDict
from ..job_failed import JobFailed, JobFailedDict
from ..job_in_progress import JobInProgress, JobInProgressDict

JobResponse: TypeAlias = JobInProgress | JobCompleted | JobFailed

JobResponseDict: TypeAlias = JobInProgressDict | JobCompletedDict | JobFailedDict
