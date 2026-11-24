from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .release import Release, ReleaseDict


class Run(SdkBaseModel):
    """The run the results came from: { tool, runId?, name?, url?, release? }"""

    tool: str
    """The tool that produced the results: promptfoo, inspect, garak, weave, …"""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    name: Optional[str] = UNSET
    """The run, task, experiment or evaluation name"""

    url: Optional[str] = UNSET
    """The run in the tool, for a reviewer to open"""

    started_at: Optional[str] = Field(default=UNSET, alias="startedAt")
    release: Optional[Release] = UNSET
    """The release the run tested — any of provider, model, modelVersion, promptHash, guardrailsHash. Evidence naming a
    release other than the one the AI system now runs does not count towards a control"""


class RunDict(TypedDict):
    tool: str
    run_id: NotRequired[str]
    name: NotRequired[str]
    url: NotRequired[str]
    started_at: NotRequired[str]
    release: NotRequired[ReleaseDict]
