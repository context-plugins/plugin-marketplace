from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Action(SdkBaseModel):
    resource: Optional[Any] = UNSET
    """Reference to a nested ServiceRequest."""


class ActionDict(TypedDict):
    resource: NotRequired[Any]
