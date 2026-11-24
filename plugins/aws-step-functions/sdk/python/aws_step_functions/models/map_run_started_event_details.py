from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapRunStartedEventDetails(SdkBaseModel):
    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) of a Map Run that was started."""


class MapRunStartedEventDetailsDict(TypedDict):
    map_run_arn: NotRequired[str]
