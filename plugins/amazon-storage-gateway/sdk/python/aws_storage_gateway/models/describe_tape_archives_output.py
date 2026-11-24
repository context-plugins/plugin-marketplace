from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tape_archive import TapeArchive, TapeArchiveDict


class DescribeTapeArchivesOutput(SdkBaseModel):
    tape_archives: Optional[list[TapeArchive]] = Field(default=UNSET, alias="TapeArchives")
    """An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource
    Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes,
    size of the tapes, status of the tapes, progress of the description, and tape barcode."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which the virtual tapes that were fetched for description ended.
    Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If
    there are no more virtual tapes to describe, this field does not appear in the response."""


class DescribeTapeArchivesOutputDict(TypedDict):
    tape_archives: NotRequired[list[TapeArchiveDict]]
    marker: NotRequired[str]
