from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidateBatchRequest(SdkBaseModel):
    api_key: str
    """The user's ZeroBounce API key."""

    emails: Optional[str] = UNSET
    """A string representing a comma-separated list of emails to validate."""


class ValidateBatchRequestDict(TypedDict):
    api_key: str
    emails: NotRequired[str]
