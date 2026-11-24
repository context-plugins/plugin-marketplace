from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetachVolumeOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume that was detached."""


class DetachVolumeOutputDict(TypedDict):
    volume_arn: NotRequired[str]
