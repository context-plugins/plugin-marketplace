from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .single_enrichment_request import SingleEnrichmentRequest, SingleEnrichmentRequestDict


class BulkEnrichmentRequest(SdkBaseModel):
    data: list[SingleEnrichmentRequest]
    """Up to 500 records per POST"""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """URL Leadspace calls back when bulk processing completes"""

    external_bulk_id: Optional[str] = UNSET


class BulkEnrichmentRequestDict(TypedDict):
    data: list[SingleEnrichmentRequestDict]
    callback_url: NotRequired[str]
    external_bulk_id: NotRequired[str]
