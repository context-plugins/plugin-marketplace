from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum import Datum, DatumDict


class BulkCampaignsExportResponse(SdkBaseModel):
    data: Optional[list[Datum]] = UNSET


class BulkCampaignsExportResponseDict(TypedDict):
    data: NotRequired[list[DatumDict]]
