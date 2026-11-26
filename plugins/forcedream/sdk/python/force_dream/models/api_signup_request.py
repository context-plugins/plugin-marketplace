from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ApiSignupRequest(SdkBaseModel):
    email: EmailStr
    marketing_consent: bool = False
    """Explicit opt-in only. Defaults to false -- an email address existing because someone signed up is never treated
    as consent to be contacted."""


class ApiSignupRequestDict(TypedDict):
    email: EmailStr
    marketing_consent: NotRequired[bool]
