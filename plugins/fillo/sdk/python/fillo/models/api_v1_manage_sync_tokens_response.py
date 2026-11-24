from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .credential_summary import CredentialSummary, CredentialSummaryDict


class ApiV1ManageSyncTokensResponse(SdkBaseModel):
    tokens: list[CredentialSummary]


class ApiV1ManageSyncTokensResponseDict(TypedDict):
    tokens: list[CredentialSummaryDict]
