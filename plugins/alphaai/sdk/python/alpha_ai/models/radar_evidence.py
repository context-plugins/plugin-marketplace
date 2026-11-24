from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class RadarEvidence(SdkBaseModel):
    uid: str
    title: str
    url: str
    source_domain: str
    time_published: RFC3339DateTime


class RadarEvidenceDict(TypedDict):
    uid: str
    title: str
    url: str
    source_domain: str
    time_published: RFC3339DateTime
