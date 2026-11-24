from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IamDiff(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    missing: Optional[list[str]] = UNSET
    extra: Optional[list[str]] = UNSET


class IamDiffDict(TypedDict):
    missing: NotRequired[list[str]]
    extra: NotRequired[list[str]]
