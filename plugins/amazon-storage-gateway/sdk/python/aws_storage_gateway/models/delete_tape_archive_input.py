from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteTapeArchiveInput(SdkBaseModel):
    tape_arn: str = Field(alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS)."""

    bypass_governance_retention: Optional[bool] = Field(default=UNSET, alias="BypassGovernanceRetention")
    """Set to TRUE to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived
    tapes with tape retention lock set to governance can be deleted. Archived tapes with tape retention lock set to
    compliance can't be deleted."""


class DeleteTapeArchiveInputDict(TypedDict):
    tape_arn: str
    bypass_governance_retention: NotRequired[bool]
