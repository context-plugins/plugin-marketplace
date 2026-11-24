from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_validation_challenge import DnsValidationChallenge, DnsValidationChallengeDict
from .email_validation_challenge import EmailValidationChallenge, EmailValidationChallengeDict


class ValidationChallenge(SdkBaseModel):
    """Exactly one member is set."""

    email_validation_challenge: Optional[EmailValidationChallenge] = Field(
        default=UNSET, alias="EmailValidationChallenge"
    )
    dns_validation_challenge: Optional[DnsValidationChallenge] = Field(default=UNSET, alias="DnsValidationChallenge")


class ValidationChallengeDict(TypedDict):
    email_validation_challenge: NotRequired[EmailValidationChallengeDict]
    dns_validation_challenge: NotRequired[DnsValidationChallengeDict]
