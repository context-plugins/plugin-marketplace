from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Title(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    old: Optional[str] = UNSET
    new: Optional[str] = UNSET


class TitleDict(TypedDict):
    old: NotRequired[str]
    new: NotRequired[str]
