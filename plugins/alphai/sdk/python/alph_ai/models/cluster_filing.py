from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ClusterFiling(SdkBaseModel):
    accession_number: str
    filed_at: RFC3339DateTime
    sec_url: str
    """The filing's EDGAR index page."""


class ClusterFilingDict(TypedDict):
    accession_number: str
    filed_at: RFC3339DateTime
    sec_url: str
