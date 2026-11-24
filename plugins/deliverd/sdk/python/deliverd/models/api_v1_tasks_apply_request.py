from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.outcome8 import Outcome8OrStr


class ApiV1TasksApplyRequest(SdkBaseModel):
    outcome: Optional[Outcome8OrStr] = UNSET
    """applied (the default) carries the result into the parent; kept records it as reference only; discarded records
    that it was not used"""


class ApiV1TasksApplyRequestDict(TypedDict):
    outcome: NotRequired[Outcome8OrStr]
