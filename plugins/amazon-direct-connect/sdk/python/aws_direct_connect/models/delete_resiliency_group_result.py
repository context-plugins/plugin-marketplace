from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resiliency_group import ResiliencyGroup, ResiliencyGroupDict


class DeleteResiliencyGroupResult(SdkBaseModel):
    resiliency_group: Optional[ResiliencyGroup] = Field(default=UNSET, alias="resiliencyGroup")


class DeleteResiliencyGroupResultDict(TypedDict):
    resiliency_group: NotRequired[ResiliencyGroupDict]
