from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_result_value import KeyResultValue, KeyResultValueDict


class UpdateKeyResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The name of the Key Result."""

    initial_observed_value: Optional[KeyResultValue] = UNSET
    """The starting value of the Key Result."""

    observed_value: Optional[KeyResultValue] = UNSET
    """The starting value of the Key Result."""

    target_value: Optional[KeyResultValue] = UNSET
    """The starting value of the Key Result."""


class UpdateKeyResultDict(TypedDict):
    name: NotRequired[str]
    initial_observed_value: NotRequired[KeyResultValueDict]
    observed_value: NotRequired[KeyResultValueDict]
    target_value: NotRequired[KeyResultValueDict]
