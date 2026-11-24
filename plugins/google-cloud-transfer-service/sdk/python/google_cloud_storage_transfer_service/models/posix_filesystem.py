from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PosixFilesystem(SdkBaseModel):
    """A POSIX filesystem resource."""

    root_directory: Optional[str] = Field(default=UNSET, alias="rootDirectory")
    """Root directory path to the filesystem."""


class PosixFilesystemDict(TypedDict):
    root_directory: NotRequired[str]
