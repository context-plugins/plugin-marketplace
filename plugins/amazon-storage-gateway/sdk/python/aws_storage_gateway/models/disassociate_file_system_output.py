from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisassociateFileSystemOutput(SdkBaseModel):
    file_system_association_arn: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationARN")
    """The Amazon Resource Name (ARN) of the deleted file system association."""


class DisassociateFileSystemOutputDict(TypedDict):
    file_system_association_arn: NotRequired[str]
