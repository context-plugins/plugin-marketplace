from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resiliency_group import ResiliencyGroup, ResiliencyGroupDict


class UpdateResiliencyGroupResult(SdkBaseModel):
    resiliency_group: Optional[ResiliencyGroup] = Field(default=UNSET, alias="resiliencyGroup")


class UpdateResiliencyGroupResultDict(TypedDict):
    resiliency_group: NotRequired[ResiliencyGroupDict]
