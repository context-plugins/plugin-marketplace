from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KinesisVideoStream(SdkBaseModel):
    arn: Optional[str] = Field(default=UNSET, alias="Arn")
    """ARN of the Kinesis video stream stream that streams the source video."""


class KinesisVideoStreamDict(TypedDict):
    arn: NotRequired[str]
