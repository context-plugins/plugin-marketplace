from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.channel_doi_t_signup_api import ChannelDoiTSignupApiOrStr
from .enums.status_doi_t_signup_api import StatusDoiTSignupApiOrStr
from .reason_doi_t_signup_api import ReasonDoiTSignupApi, ReasonDoiTSignupApiDict
from .signup_verification import SignupVerification, SignupVerificationDict


class SignupRequest(SdkBaseModel):
    """Redacted public view of a signup request. Never includes the admin email, the verification code or the
    idempotency key."""

    id: str
    """Public request id (sr_ prefix); an unguessable capability."""

    status: StatusDoiTSignupApiOrStr
    channel: Optional[ChannelDoiTSignupApiOrStr] = UNSET
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """Company name supplied at signup; shown on the console verification and completion pages."""

    consent_url: Optional[str] = Field(default=UNSET, alias="consentUrl")
    """Page where the organization's admin verifies the request (pending_consent only)."""

    activation_token: Optional[str] = Field(default=UNSET, alias="activationToken")
    """Returned once, by the verifySignupRequest call that performed the verification. Redeem it with
    createSignupSession after the request is completed."""

    verification: Optional[SignupVerification] = UNSET
    """Present while the request awaits the emailed code."""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """When an unverified request expires (pending_consent only)."""

    poll_after_seconds: Optional[int] = Field(default=UNSET, alias="pollAfterSeconds")
    """Suggested polling interval while the request is not terminal."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """The provisioned tenant (completed only)."""

    console_url: Optional[str] = Field(default=UNSET, alias="consoleUrl")
    sign_in_url: Optional[str] = Field(default=UNSET, alias="signInUrl")
    """Page where the admin signs into the new tenant (completed only)."""

    tier: Optional[str] = UNSET
    """Trial tier name (trial)."""

    trial_end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="trialEndDate")
    next_steps: Optional[list[str]] = Field(default=UNSET, alias="nextSteps")
    reason: Optional[ReasonDoiTSignupApi] = UNSET
    """Why a terminal request did not complete."""


class SignupRequestDict(TypedDict):
    id: str
    status: StatusDoiTSignupApiOrStr
    channel: NotRequired[ChannelDoiTSignupApiOrStr]
    company_name: NotRequired[str]
    consent_url: NotRequired[str]
    activation_token: NotRequired[str]
    verification: NotRequired[SignupVerificationDict]
    expires_at: NotRequired[RFC3339DateTime]
    poll_after_seconds: NotRequired[int]
    customer_id: NotRequired[str]
    console_url: NotRequired[str]
    sign_in_url: NotRequired[str]
    tier: NotRequired[str]
    trial_end_date: NotRequired[RFC3339DateTime]
    next_steps: NotRequired[list[str]]
    reason: NotRequired[ReasonDoiTSignupApiDict]
