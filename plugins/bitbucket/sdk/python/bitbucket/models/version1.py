from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Version1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    old: Optional[str] = UNSET
    new: Optional[str] = UNSET


class Version1Dict(TypedDict):
    old: NotRequired[str]
    new: NotRequired[str]
