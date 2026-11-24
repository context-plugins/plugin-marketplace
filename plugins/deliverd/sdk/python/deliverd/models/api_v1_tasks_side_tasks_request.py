from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind6 import Kind6OrStr
from .enums.origin6 import Origin6OrStr


class ApiV1TasksSideTasksRequest(SdkBaseModel):
    title: str
    """What the side task is, as it will appear under the objective"""

    goal: str
    """What exactly it has to solve. Narrow is better: it is done when this is answered"""

    kind: Optional[Kind6OrStr] = UNSET
    """side_task, investigation, research, debug or decision; side_task when omitted"""

    relevant_context: Optional[list[str]] = Field(default=UNSET, alias="relevantContext")
    """The context it needs, replacing what Deliverd would select from the parent. Facts, not the transcript"""

    known_constraints: Optional[list[str]] = Field(default=UNSET, alias="knownConstraints")
    """What it must respect; the parent's constraints when omitted"""

    resolves_question: Optional[str] = Field(default=UNSET, alias="resolvesQuestion")
    """One of the parent's open questions this is meant to answer; it comes off the list when the result is applied"""

    origin: Optional[Origin6OrStr] = UNSET
    """suggested when you proposed moving this into a side task and the person agreed"""

    session_url: Optional[str] = Field(default=UNSET, alias="sessionUrl")


class ApiV1TasksSideTasksRequestDict(TypedDict):
    title: str
    goal: str
    kind: NotRequired[Kind6OrStr]
    relevant_context: NotRequired[list[str]]
    known_constraints: NotRequired[list[str]]
    resolves_question: NotRequired[str]
    origin: NotRequired[Origin6OrStr]
    session_url: NotRequired[str]
