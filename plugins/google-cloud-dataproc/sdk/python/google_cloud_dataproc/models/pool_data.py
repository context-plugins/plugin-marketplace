from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PoolData(SdkBaseModel):
    """Pool Data"""

    name: Optional[str] = UNSET
    stage_ids: Optional[list[str]] = Field(default=UNSET, alias="stageIds")


class PoolDataDict(TypedDict):
    name: NotRequired[str]
    stage_ids: NotRequired[list[str]]
