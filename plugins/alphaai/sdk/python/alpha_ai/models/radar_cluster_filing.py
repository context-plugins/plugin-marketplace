from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class RadarClusterFiling(SdkBaseModel):
    accession_number: str
    filed_at: RFC3339DateTime
    sec_url: str


class RadarClusterFilingDict(TypedDict):
    accession_number: str
    filed_at: RFC3339DateTime
    sec_url: str
