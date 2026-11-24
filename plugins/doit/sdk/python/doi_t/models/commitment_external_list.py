from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commitment_external_list_item import CommitmentExternalListItem, CommitmentExternalListItemDict


class CommitmentExternalList(SdkBaseModel):
    """List of commitments."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token. It is used to request a specific page of the list results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The number of returned records."""

    commitments: Optional[list[CommitmentExternalListItem]] = UNSET
    """Array of commitments."""


class CommitmentExternalListDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    commitments: NotRequired[list[CommitmentExternalListItemDict]]
