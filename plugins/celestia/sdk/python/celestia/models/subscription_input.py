from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubscriptionInput(SdkBaseModel):
    email: EmailStr
    """Email address whose owner consented to subscribe."""

    token: str
    """A fresh reCAPTCHA token obtained through the website newsletter form. Automated clients must not bypass this
    requirement."""


class SubscriptionInputDict(TypedDict):
    email: EmailStr
    token: str
