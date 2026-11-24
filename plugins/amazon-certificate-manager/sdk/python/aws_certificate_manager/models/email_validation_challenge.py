from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmailValidationChallenge(SdkBaseModel):
    validation_emails: Optional[list[str]] = Field(default=UNSET, alias="ValidationEmails")
    """A list of email addresses that ACM uses to send domain validation emails."""

    validation_domain: Optional[str] = Field(default=UNSET, alias="ValidationDomain")
    """The domain name that ACM uses to send validation emails."""


class EmailValidationChallengeDict(TypedDict):
    validation_emails: NotRequired[list[str]]
    validation_domain: NotRequired[str]
