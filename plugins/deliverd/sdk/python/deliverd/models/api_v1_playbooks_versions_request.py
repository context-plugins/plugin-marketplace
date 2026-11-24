from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input import Input, InputDict
from .prompt import Prompt, PromptDict
from .step import Step, StepDict


class ApiV1PlaybooksVersionsRequest(SdkBaseModel):
    title: str
    """The job, as people name it: Onboard a supplier"""

    purpose: str
    """The outcome when it is done. Becomes the objective of every run; for a prompt, the one line people see"""

    steps: Optional[list[Step]] = UNSET
    """The steps. Required for a playbook; left out for a prompt, which has one step of its own"""

    prompt: Optional[Prompt] = UNSET
    """Send this instead of steps to draft an approved prompt: words people and agents use, versioned and approved like
    any playbook"""

    inputs: Optional[list[Input]] = UNSET
    """What a run needs to be given, such as the supplier's name"""

    knowledge_ids: Optional[list[UUID]] = Field(default=UNSET, alias="knowledgeIds")
    """Knowledge every step relies on"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    note: Optional[str] = UNSET


class ApiV1PlaybooksVersionsRequestDict(TypedDict):
    title: str
    purpose: str
    steps: NotRequired[list[StepDict]]
    prompt: NotRequired[PromptDict]
    inputs: NotRequired[list[InputDict]]
    knowledge_ids: NotRequired[list[UUID]]
    workspace_id: NotRequired[UUID]
    note: NotRequired[str]
