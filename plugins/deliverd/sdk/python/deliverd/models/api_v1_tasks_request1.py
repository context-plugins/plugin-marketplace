from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status5 import Status5OrStr
from .state5 import State5, State5Dict


class ApiV1TasksRequest1(SdkBaseModel):
    title: Optional[str] = UNSET
    objective: Optional[str] = UNSET
    """Refused to an agent: only a person changes what the work is for. Record the change you propose as a finding"""

    status: Optional[Status5OrStr] = UNSET
    """open, in_progress, blocked or awaiting_approval. Finishing has its own call"""

    session_url: OptionalNullable[str] = Field(default=UNSET, alias="sessionUrl")
    state: Optional[State5] = UNSET
    expected_version: Optional[int] = Field(default=UNSET, alias="expectedVersion")
    """The version you read; the update is refused if somebody wrote in between"""


class ApiV1TasksRequest1Dict(TypedDict):
    title: NotRequired[str]
    objective: NotRequired[str]
    status: NotRequired[Status5OrStr]
    session_url: NotRequired[str | None]
    state: NotRequired[State5Dict]
    expected_version: NotRequired[int]
