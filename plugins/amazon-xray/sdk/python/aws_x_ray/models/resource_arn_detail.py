from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceArnDetail(SdkBaseModel):
    arn: Optional[str] = Field(default=UNSET, alias="ARN")
    """The ARN of a corresponding resource."""


class ResourceArnDetailDict(TypedDict):
    arn: NotRequired[str]
