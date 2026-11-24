from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaAnalysisModelVersions(SdkBaseModel):
    moderation: Optional[str] = Field(default=UNSET, alias="Moderation")
    """The Moderation base model version."""


class MediaAnalysisModelVersionsDict(TypedDict):
    moderation: NotRequired[str]
