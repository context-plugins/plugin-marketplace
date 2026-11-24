from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .state import State, StateDict


class ApiV1WholesaleStatesResponse(SdkBaseModel):
    states: Optional[list[State]] = UNSET


class ApiV1WholesaleStatesResponseDict(TypedDict):
    states: NotRequired[list[StateDict]]
