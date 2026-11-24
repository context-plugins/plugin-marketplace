from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ComplianceScanRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: str
    """The full text of the governing document to analyze."""

    state: str
    """Two-letter state code (e.g. "FL", "GA")."""

    doc_type: Optional[str] = UNSET
    """Optional. One of: "governing_document" (default), "cc_and_rs", "bylaws", "articles", "rules_and_regulations"."""


class ApiV1ComplianceScanRequestDict(TypedDict):
    text: str
    state: str
    doc_type: NotRequired[str]
