from __future__ import annotations

from typing import Any

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.lifecycle import LifecycleOrStr
from .enums.outcome import OutcomeOrStr
from .enums.status import StatusOrStr
from .node import Node, NodeDict
from .step import Step, StepDict


class BuildDetail(SdkBaseModel):
    vcs_url: Optional[str] = UNSET
    """The VCS URL"""

    build_url: Optional[str] = UNSET
    """URL to view the build in CircleCI"""

    build_num: Optional[int] = UNSET
    """The build number"""

    branch: Optional[str] = UNSET
    """The branch that was built"""

    vcs_revision: Optional[str] = UNSET
    """The VCS revision (commit SHA)"""

    committer_name: Optional[str] = UNSET
    """Name of the committer"""

    committer_email: Optional[EmailStr] = UNSET
    """Email of the committer"""

    subject: Optional[str] = UNSET
    """The commit message subject"""

    body: Optional[str] = UNSET
    """The commit message body"""

    why: Optional[str] = UNSET
    """Why the build was triggered"""

    status: Optional[StatusOrStr] = UNSET
    """The build status"""

    outcome: Optional[OutcomeOrStr] = UNSET
    """The build outcome"""

    start_time: Optional[RFC3339DateTime] = UNSET
    """When the build started"""

    stop_time: Optional[RFC3339DateTime] = UNSET
    """When the build stopped"""

    build_time_millis: Optional[int] = UNSET
    """Total build time in milliseconds"""

    queued_at: Optional[RFC3339DateTime] = UNSET
    """When the build was queued"""

    lifecycle: Optional[LifecycleOrStr] = UNSET
    """The build lifecycle phase"""

    username: Optional[str] = UNSET
    """The organization or username"""

    reponame: Optional[str] = UNSET
    """The repository name"""

    steps: Optional[list[Step]] = UNSET
    """Build steps"""

    circle_yml: Optional[Any] = UNSET
    """The parsed CircleCI configuration"""

    messages: Optional[list[str]] = UNSET
    """Build messages"""

    node: Optional[list[Node]] = UNSET
    """Node information for SSH access"""


class BuildDetailDict(TypedDict):
    vcs_url: NotRequired[str]
    build_url: NotRequired[str]
    build_num: NotRequired[int]
    branch: NotRequired[str]
    vcs_revision: NotRequired[str]
    committer_name: NotRequired[str]
    committer_email: NotRequired[EmailStr]
    subject: NotRequired[str]
    body: NotRequired[str]
    why: NotRequired[str]
    status: NotRequired[StatusOrStr]
    outcome: NotRequired[OutcomeOrStr]
    start_time: NotRequired[RFC3339DateTime]
    stop_time: NotRequired[RFC3339DateTime]
    build_time_millis: NotRequired[int]
    queued_at: NotRequired[RFC3339DateTime]
    lifecycle: NotRequired[LifecycleOrStr]
    username: NotRequired[str]
    reponame: NotRequired[str]
    steps: NotRequired[list[StepDict]]
    circle_yml: NotRequired[Any]
    messages: NotRequired[list[str]]
    node: NotRequired[list[NodeDict]]
