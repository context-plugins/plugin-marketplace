from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StateFeature(SdkBaseModel):
    """One observation feature group: per-dimension labels + values."""

    model_config = ConfigDict(extra="forbid")

    names: Optional[list[str]] = UNSET
    values: Optional[list[float]] = UNSET


class StateFeatureDict(TypedDict):
    names: NotRequired[list[str]]
    values: NotRequired[list[float]]
