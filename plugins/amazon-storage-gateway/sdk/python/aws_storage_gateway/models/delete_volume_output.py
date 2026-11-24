from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteVolumeOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the
    request."""


class DeleteVolumeOutputDict(TypedDict):
    volume_arn: NotRequired[str]
