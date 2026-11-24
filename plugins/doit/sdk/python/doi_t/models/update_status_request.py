from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dismissal_details import DismissalDetails, DismissalDetailsDict
from .enums.display_status import DisplayStatusOrStr


class UpdateStatusRequest(SdkBaseModel):
    """Request body for updating an insight's display status."""

    status: DisplayStatusOrStr
    """The display status of the insight."""

    dismissal_details: Optional[DismissalDetails] = Field(default=UNSET, alias="dismissalDetails")
    """Details for why an insight was dismissed."""


class UpdateStatusRequestDict(TypedDict):
    status: DisplayStatusOrStr
    dismissal_details: NotRequired[DismissalDetailsDict]
