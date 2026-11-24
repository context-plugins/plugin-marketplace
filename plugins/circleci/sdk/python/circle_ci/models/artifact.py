from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Artifact(SdkBaseModel):
    path: Optional[str] = UNSET
    """The artifact path"""

    pretty_path: Optional[str] = UNSET
    """Human-readable artifact path"""

    node_index: Optional[int] = UNSET
    """The node index that produced this artifact"""

    url: Optional[str] = UNSET
    """URL to download the artifact"""


class ArtifactDict(TypedDict):
    path: NotRequired[str]
    pretty_path: NotRequired[str]
    node_index: NotRequired[int]
    url: NotRequired[str]
