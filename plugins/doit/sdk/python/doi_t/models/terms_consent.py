from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TermsConsent(SdkBaseModel):
    """Terms of Service acceptance. Required for the console and web channels."""

    version: str
    """Terms version shown to the requester; must be a version the API currently accepts, otherwise
    terms_version_outdated."""

    accepted: bool


class TermsConsentDict(TypedDict):
    version: str
    accepted: bool
