from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateFileSystemAssociationOutput(SdkBaseModel):
    file_system_association_arn: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationARN")
    """The ARN of the updated file system association."""


class UpdateFileSystemAssociationOutputDict(TypedDict):
    file_system_association_arn: NotRequired[str]
