from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignupProblemError(SdkBaseModel):
    """RFC 9457 problem details for the Signup operations."""

    type_: str = Field(alias="type")
    title: str
    status: int
    detail: Optional[str] = UNSET
    code: str
    """Machine-readable problem code (see each response description)."""

    retryable: bool
    signup_request_id: Optional[str] = Field(default=UNSET, alias="signupRequestId")
    """The already-pending request for this domain (signup_already_pending)."""

    sign_in_url: Optional[str] = Field(default=UNSET, alias="signInUrl")
    """Where an existing DoiT user or customer should sign in instead."""

    appeal_url: Optional[str] = Field(default=UNSET, alias="appealUrl")
    """Where a blocked signup (code signup_blocked) can ask DoiT to review the decision."""


class SignupProblemErrorDict(TypedDict):
    type_: str
    title: str
    status: int
    detail: NotRequired[str]
    code: str
    retryable: bool
    signup_request_id: NotRequired[str]
    sign_in_url: NotRequired[str]
    appeal_url: NotRequired[str]
