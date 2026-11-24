from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.category import CategoryOrStr
from .enums.severity1 import Severity1OrStr


class ApiV1GovernanceIncidentsRequest(SdkBaseModel):
    task_id: Optional[UUID] = Field(default=UNSET, alias="taskId")
    """The governed task it concerns"""

    ai_system_id: Optional[UUID] = Field(default=UNSET, alias="aiSystemId")
    """The AI system it concerns; the task's own system when only taskId is given"""

    title: str
    description: Optional[str] = UNSET
    severity: Severity1OrStr
    """high or critical closes the governance gate until a person resolves it"""

    detected_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="detectedAt")
    """When the organisation became aware of it, if earlier than now. DORA's reporting clocks start here"""

    category: Optional[CategoryOrStr] = UNSET
    """What kind of incident it was, which the AI risk scorecard counts: data_disclosure, sensitive_data,
    prompt_injection, fairness, wrong_output, outage, unauthorised_action or other"""


class ApiV1GovernanceIncidentsRequestDict(TypedDict):
    task_id: NotRequired[UUID]
    ai_system_id: NotRequired[UUID]
    title: str
    description: NotRequired[str]
    severity: Severity1OrStr
    detected_at: NotRequired[RFC3339DateTime]
    category: NotRequired[CategoryOrStr]
