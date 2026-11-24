from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DraftReviewMetadataInput(SdkBaseModel):
    """Identifies the reviewer in the caller's own approval system."""

    model_config = ConfigDict(extra="forbid")

    ext_id: str = Field(alias="extId")
    """The reviewer's id in the caller's approval system"""


class DraftReviewMetadataInputDict(TypedDict):
    ext_id: str
