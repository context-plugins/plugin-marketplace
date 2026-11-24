from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PosixFilesystem3(SdkBaseModel):
    """Optional. A POSIX Filesystem data sink."""

    root_directory: Optional[str] = Field(default=UNSET, alias="rootDirectory")
    """Root directory path to the filesystem."""


class PosixFilesystem3Dict(TypedDict):
    root_directory: NotRequired[str]
