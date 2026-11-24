from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1TasksGovernanceReassessmentsRequest(SdkBaseModel):
    reason: str
    """Why the task needs reassessing"""


class ApiV1TasksGovernanceReassessmentsRequestDict(TypedDict):
    reason: str
