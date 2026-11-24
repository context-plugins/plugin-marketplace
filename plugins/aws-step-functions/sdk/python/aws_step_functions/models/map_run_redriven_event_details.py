from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapRunRedrivenEventDetails(SdkBaseModel):
    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) of a Map Run that was redriven."""

    redrive_count: Optional[int] = Field(default=UNSET, alias="redriveCount")
    """The number of times the Map Run has been redriven at this point in the execution's history including this event.
    The redrive count for a redriven Map Run is always greater than 0."""


class MapRunRedrivenEventDetailsDict(TypedDict):
    map_run_arn: NotRequired[str]
    redrive_count: NotRequired[int]
