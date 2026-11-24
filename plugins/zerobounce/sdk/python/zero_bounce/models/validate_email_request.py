from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidateEmailRequest(SdkBaseModel):
    api_key: Optional[str] = UNSET
    """The user's ZeroBounce API key. Optional. The user can perform up to 3 requests per day without providing this API
    key."""

    email: str
    """The email you want to validate."""


class ValidateEmailRequestDict(TypedDict):
    api_key: NotRequired[str]
    email: str
