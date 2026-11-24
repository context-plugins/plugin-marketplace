from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source import Source, SourceDict
from .terms_consent import TermsConsent, TermsConsentDict


class SignupRequestCreate(SdkBaseModel):
    email: EmailStr
    """Work email of the organization's admin. Free-mail and disposable addresses are rejected."""

    company_name: str = Field(alias="companyName")
    source: Optional[Source] = UNSET
    """Attribution. channel defaults to agent; console and web are the human channels."""

    turnstile_token: Optional[str] = Field(default=UNSET, alias="turnstileToken")
    """Cloudflare Turnstile response token. Required for the console and web channels."""

    terms_consent: Optional[TermsConsent] = Field(default=UNSET, alias="termsConsent")
    """Terms of Service acceptance. Required for the console and web channels."""


class SignupRequestCreateDict(TypedDict):
    email: EmailStr
    company_name: str
    source: NotRequired[SourceDict]
    turnstile_token: NotRequired[str]
    terms_consent: NotRequired[TermsConsentDict]
