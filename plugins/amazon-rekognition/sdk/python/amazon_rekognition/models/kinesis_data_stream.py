from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KinesisDataStream(SdkBaseModel):
    arn: Optional[str] = Field(default=UNSET, alias="Arn")
    """ARN of the output Amazon Kinesis Data Streams stream."""


class KinesisDataStreamDict(TypedDict):
    arn: NotRequired[str]
