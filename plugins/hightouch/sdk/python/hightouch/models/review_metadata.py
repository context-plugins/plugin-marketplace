from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReviewMetadata(SdkBaseModel):
    """The metadata sent with the approval or rejection"""

    ext_id: str = Field(alias="extId")


class ReviewMetadataDict(TypedDict):
    ext_id: str
