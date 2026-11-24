from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_deliverd_dev_tasks_api import TypeDeliverdDevTasksApiOrStr
from .pull import Pull, PullDict
from .release1 import Release1, Release1Dict
from .report_deliverd_dev_tasks_api import ReportDeliverdDevTasksApi, ReportDeliverdDevTasksApiDict
from .result_deliverd_dev_tasks_api import ResultDeliverdDevTasksApi, ResultDeliverdDevTasksApiDict
from .run import Run, RunDict


class ApiV1TasksGovernanceEvidenceRequest(SdkBaseModel):
    type_: TypeDeliverdDevTasksApiOrStr = Field(alias="type")
    title: str
    description: Optional[str] = UNSET
    """What it shows, for a reviewer"""

    url: Optional[str] = UNSET
    controls: Optional[list[str]] = UNSET
    """The controls this evidence speaks to; one item may satisfy several"""

    finding_id: Optional[UUID] = Field(default=UNSET, alias="findingId")
    """The finding in this task it rests on, if any"""

    results: Optional[list[ResultDeliverdDevTasksApi]] = UNSET
    """What was measured, one entry per metric: { metric, value, passed?, severity?, category?, dataset?, url? }. A
    control with thresholds is judged on these"""

    run: Optional[Run] = UNSET
    """The run the results came from: { tool, runId?, name?, url?, release? }"""

    release: Optional[Release1] = UNSET
    """The release the results tested — any of provider, model, modelVersion, promptHash, guardrailsHash — with results,
    a report or a pull. Evidence that names another release than the AI system now runs does not count towards a
    control"""

    report: Optional[ReportDeliverdDevTasksApi] = UNSET
    """A tool's own report, turned into results here. Instead of results"""

    pull: Optional[Pull] = UNSET
    """Read the results from a connected tool with the organisation's own keys, which you never hold. Instead of results
    or a report"""


class ApiV1TasksGovernanceEvidenceRequestDict(TypedDict):
    type_: TypeDeliverdDevTasksApiOrStr
    title: str
    description: NotRequired[str]
    url: NotRequired[str]
    controls: NotRequired[list[str]]
    finding_id: NotRequired[UUID]
    results: NotRequired[list[ResultDeliverdDevTasksApiDict]]
    run: NotRequired[RunDict]
    release: NotRequired[Release1Dict]
    report: NotRequired[ReportDeliverdDevTasksApiDict]
    pull: NotRequired[PullDict]
