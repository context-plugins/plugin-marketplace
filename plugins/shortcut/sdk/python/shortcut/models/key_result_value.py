from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KeyResultValue(SdkBaseModel):
    """The starting value of the Key Result."""

    model_config = ConfigDict(extra="forbid")

    numeric_value: Optional[str] = UNSET
    """The numeric value, as a decimal string. No more than two decimal places are allowed."""

    boolean_value: Optional[bool] = UNSET
    """The boolean value."""


class KeyResultValueDict(TypedDict):
    numeric_value: NotRequired[str]
    boolean_value: NotRequired[bool]
