from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ImportModelResponse(SdkBaseModel):
    model_arn: Optional[str] = Field(default=UNSET, alias="ModelArn")
    """The Amazon Resource Name (ARN) of the custom model being imported."""


class ImportModelResponseDict(TypedDict):
    model_arn: NotRequired[str]
