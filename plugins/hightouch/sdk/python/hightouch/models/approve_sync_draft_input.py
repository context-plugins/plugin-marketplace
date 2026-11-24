from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .draft_review_metadata_input import DraftReviewMetadataInput, DraftReviewMetadataInputDict


class ApproveSyncDraftInput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    expected_draft_version: str = Field(alias="expectedDraftVersion")
    """The ``draftVersion`` from the draft the reviewer saw"""

    expected_resource_version: str = Field(alias="expectedResourceVersion")
    """The ``resourceVersion`` from the draft the reviewer saw"""

    metadata: Optional[DraftReviewMetadataInput] = UNSET
    """Identifies the reviewer in the caller's own approval system."""


class ApproveSyncDraftInputDict(TypedDict):
    expected_draft_version: str
    expected_resource_version: str
    metadata: NotRequired[DraftReviewMetadataInputDict]
