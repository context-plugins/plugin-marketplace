from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state4 import State4OrStr
from .enums.substate1 import Substate1OrStr


class JobStatus1(SdkBaseModel):
    """Output only. The job status. Additional application-specific status information might be contained in the
    type_job and yarn_applications fields."""

    substate: Optional[Substate1OrStr] = UNSET
    """Output only. Additional state information, which includes status reported by the agent."""

    state: Optional[State4OrStr] = UNSET
    """Output only. A state message specifying the overall job state."""

    state_start_time: Optional[str] = Field(default=UNSET, alias="stateStartTime")
    """Output only. The time when this state was entered."""

    details: Optional[str] = UNSET
    """Optional. Job state details, such as an error description if the state is ERROR."""


class JobStatus1Dict(TypedDict):
    substate: NotRequired[Substate1OrStr]
    state: NotRequired[State4OrStr]
    state_start_time: NotRequired[str]
    details: NotRequired[str]
