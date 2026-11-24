from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .interconnect import Interconnect, InterconnectDict


class Interconnects(SdkBaseModel):
    interconnects: Optional[list[Interconnect]] = UNSET
    """The interconnects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class InterconnectsDict(TypedDict):
    interconnects: NotRequired[list[InterconnectDict]]
    next_token: NotRequired[str]
