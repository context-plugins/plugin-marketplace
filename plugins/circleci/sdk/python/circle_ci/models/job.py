from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .executor import Executor, ExecutorDict
from .latest_workflow import LatestWorkflow, LatestWorkflowDict
from .parallel_run import ParallelRun, ParallelRunDict
from .pipeline import Pipeline, PipelineDict
from .project import Project, ProjectDict


class Job(SdkBaseModel):
    web_url: Optional[str] = UNSET
    """URL to view the job in the CircleCI web app"""

    project: Optional[Project] = UNSET
    """The project this job belongs to"""

    parallel_runs: Optional[list[ParallelRun]] = UNSET
    """Parallel run information"""

    started_at: Optional[RFC3339DateTime] = UNSET
    """When the job started"""

    latest_workflow: Optional[LatestWorkflow] = UNSET
    """The latest workflow this job is part of"""

    name: Optional[str] = UNSET
    """The name of the job"""

    executor: Optional[Executor] = UNSET
    """The executor configuration"""

    parallelism: Optional[int] = UNSET
    """The parallelism level"""

    status: Optional[str] = UNSET
    """The current status of the job"""

    number: Optional[int] = UNSET
    """The job number"""

    pipeline: Optional[Pipeline] = UNSET
    """The pipeline this job belongs to"""

    duration: Optional[int] = UNSET
    """The duration of the job in milliseconds"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the job was created"""

    stopped_at: Optional[RFC3339DateTime] = UNSET
    """When the job stopped"""


class JobDict(TypedDict):
    web_url: NotRequired[str]
    project: NotRequired[ProjectDict]
    parallel_runs: NotRequired[list[ParallelRunDict]]
    started_at: NotRequired[RFC3339DateTime]
    latest_workflow: NotRequired[LatestWorkflowDict]
    name: NotRequired[str]
    executor: NotRequired[ExecutorDict]
    parallelism: NotRequired[int]
    status: NotRequired[str]
    number: NotRequired[int]
    pipeline: NotRequired[PipelineDict]
    duration: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    stopped_at: NotRequired[RFC3339DateTime]
