from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssociateFileSystemOutput(SdkBaseModel):
    file_system_association_arn: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationARN")
    """The ARN of the newly created file system association."""


class AssociateFileSystemOutputDict(TypedDict):
    file_system_association_arn: NotRequired[str]
