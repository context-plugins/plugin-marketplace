from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FileManifestEntry(SdkBaseModel):
    """One file in a workspace snapshot manifest: path + size + content hash.

    The manifest carries identity, not content. The viewer derives unchanged content from immutable build source and
    applies setup changes separately."""

    model_config = ConfigDict(extra="forbid")

    path: str
    size: int = 0
    content_hash: Optional[str] = UNSET


class FileManifestEntryDict(TypedDict):
    path: str
    size: NotRequired[int]
    content_hash: NotRequired[str]
