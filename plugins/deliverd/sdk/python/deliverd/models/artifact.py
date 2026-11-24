from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Artifact(SdkBaseModel):
    """What the act is about. An approval covers this artifact and no other: report a different hash when you record
    execution and it is refused as ``approval_invalidated``"""

    report_id: Optional[UUID] = Field(default=UNSET, alias="reportId")
    version_id: Optional[UUID] = Field(default=UNSET, alias="versionId")
    """A Deliverd report version: the approval binds to exactly this version"""

    sha256: Optional[str] = UNSET
    """The sha256 of the file you will act on. For a Deliverd version it must match Deliverd's own"""

    name: Optional[str] = UNSET
    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    size: Optional[int] = UNSET
    uri: Optional[str] = UNSET


class ArtifactDict(TypedDict):
    report_id: NotRequired[UUID]
    version_id: NotRequired[UUID]
    sha256: NotRequired[str]
    name: NotRequired[str]
    mime_type: NotRequired[str]
    size: NotRequired[int]
    uri: NotRequired[str]
