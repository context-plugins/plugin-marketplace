from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .variable import Variable, VariableDict


class VariableList(SdkBaseModel):
    """A list of project variables."""

    data: Optional[list[Variable]] = UNSET
    """Array of variable objects."""


class VariableListDict(TypedDict):
    data: NotRequired[list[VariableDict]]
