from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1AutomationsCopyRequest(SdkBaseModel):
    source_team_id: str = Field(alias="sourceTeamId")
    target_team_id: str = Field(alias="targetTeamId")
    flow_id: Optional[str] = Field(default=UNSET, alias="flowId")


class ApiV1AutomationsCopyRequestDict(TypedDict):
    source_team_id: str
    target_team_id: str
    flow_id: NotRequired[str]
