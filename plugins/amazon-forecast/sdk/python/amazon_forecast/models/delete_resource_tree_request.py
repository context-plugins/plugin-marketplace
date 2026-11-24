from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteResourceTreeRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the parent resource to delete. All child resources of the parent resource will
    also be deleted."""


class DeleteResourceTreeRequestDict(TypedDict):
    resource_arn: str
