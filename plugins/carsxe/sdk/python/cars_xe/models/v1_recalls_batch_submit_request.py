from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1RecallsBatchSubmitRequest(SdkBaseModel):
    vins: Optional[list[str]] = UNSET
    """Array of 17-character VINs (max 10,000 per batch)."""

    csv: Optional[str] = UNSET
    """Inline CSV text containing VINs. Available with CarsXE API-key authentication only; x402 does not accept this
    form."""

    csv_url: Optional[str] = Field(default=UNSET, alias="csvUrl")
    """HTTPS link to a CSV file of VINs (max 5 MB) hosted on a supported storage provider (e.g. S3, GCS, Firebase,
    Dropbox). Available with CarsXE API-key authentication only; x402 does not accept this form."""

    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """HTTPS URL for a customer webhook. CarsXE POSTs a JSON payload when the batch finishes. Must be a valid HTTPS URL
    allowed by CarsXE validation rules."""


class V1RecallsBatchSubmitRequestDict(TypedDict):
    vins: NotRequired[list[str]]
    csv: NotRequired[str]
    csv_url: NotRequired[str]
    webhook_url: NotRequired[str]
