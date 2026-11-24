from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind_deliverd_dev_gates_api import KindDeliverdDevGatesApiOrStr


class Artifact1(SdkBaseModel):
    kind: KindDeliverdDevGatesApiOrStr
    report_id: str | None = Field(alias="reportId")
    version_id: str | None = Field(alias="versionId")
    version_number: float | None = Field(alias="versionNumber")
    sha256: str | None
    name: str | None
    mime_type: str | None = Field(alias="mimeType")
    size: float | None
    uri: str | None
    verified: bool


class Artifact1Dict(TypedDict):
    kind: KindDeliverdDevGatesApiOrStr
    report_id: str | None
    version_id: str | None
    version_number: float | None
    sha256: str | None
    name: str | None
    mime_type: str | None
    size: float | None
    uri: str | None
    verified: bool
