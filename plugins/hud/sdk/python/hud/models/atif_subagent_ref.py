from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtifSubagentRef(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    trajectory_id: Optional[str] = UNSET
    session_id: Optional[str] = UNSET
    trajectory_path: Optional[str] = UNSET
    extra: Optional[Any] = UNSET


class AtifSubagentRefDict(TypedDict):
    trajectory_id: NotRequired[str]
    session_id: NotRequired[str]
    trajectory_path: NotRequired[str]
    extra: NotRequired[Any]
