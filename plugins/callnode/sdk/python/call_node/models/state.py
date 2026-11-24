from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class State(SdkBaseModel):
    state_id: Optional[str] = Field(default=UNSET, alias="stateId")
    """Opaque token."""

    state_name: Optional[str] = Field(default=UNSET, alias="stateName")


class StateDict(TypedDict):
    state_id: NotRequired[str]
    state_name: NotRequired[str]
