from __future__ import annotations

from typing import TypeAlias

from ..jobs_response import JobsResponse, JobsResponseDict
from ..jobs_response1 import JobsResponse1, JobsResponse1Dict
from ..jobs_response2 import JobsResponse2, JobsResponse2Dict

JobsResponse3: TypeAlias = JobsResponse | JobsResponse1 | JobsResponse2

JobsResponse3Dict: TypeAlias = JobsResponseDict | JobsResponse1Dict | JobsResponse2Dict
