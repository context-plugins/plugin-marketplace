from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class TriggerRunIdrInput(SdkBaseModel):
    """The input of a trigger action to run IDR."""

    full_rerun: bool = Field(default=False, alias="fullRerun")
    """Whether to resync the entire Identity Graph or process incrementally."""


class TriggerRunIdrInputDict(TypedDict):
    full_rerun: NotRequired[bool]
