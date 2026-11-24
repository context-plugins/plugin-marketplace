from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PosixFilesystem1(SdkBaseModel):
    """Optional. A POSIX Filesystem data source."""

    root_directory: Optional[str] = Field(default=UNSET, alias="rootDirectory")
    """Root directory path to the filesystem."""


class PosixFilesystem1Dict(TypedDict):
    root_directory: NotRequired[str]
