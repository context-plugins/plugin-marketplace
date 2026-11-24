from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agents import Agents, AgentsDict
from .jobs import Jobs, JobsDict
from .organization import Organization, OrganizationDict


class MetricsResponse(SdkBaseModel):
    agents: Optional[Agents] = UNSET
    jobs: Optional[Jobs] = UNSET
    organization: Optional[Organization] = UNSET


class MetricsResponseDict(TypedDict):
    agents: NotRequired[AgentsDict]
    jobs: NotRequired[JobsDict]
    organization: NotRequired[OrganizationDict]
