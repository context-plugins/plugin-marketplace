from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .draft_review_metadata_input import DraftReviewMetadataInput, DraftReviewMetadataInputDict


class RejectSyncDraftInput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    metadata: Optional[DraftReviewMetadataInput] = UNSET
    """Identifies the reviewer in the caller's own approval system."""


class RejectSyncDraftInputDict(TypedDict):
    metadata: NotRequired[DraftReviewMetadataInputDict]
