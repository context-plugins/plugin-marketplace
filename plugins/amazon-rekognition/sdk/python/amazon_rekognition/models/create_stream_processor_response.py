from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateStreamProcessorResponse(SdkBaseModel):
    stream_processor_arn: Optional[str] = Field(default=UNSET, alias="StreamProcessorArn")
    """Amazon Resource Number for the newly created stream processor."""


class CreateStreamProcessorResponseDict(TypedDict):
    stream_processor_arn: NotRequired[str]
