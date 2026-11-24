from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RemoveTagsFromResourceOutput(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceARN")
    """The Amazon Resource Name (ARN) of the resource that the tags were removed from."""


class RemoveTagsFromResourceOutputDict(TypedDict):
    resource_arn: NotRequired[str]
