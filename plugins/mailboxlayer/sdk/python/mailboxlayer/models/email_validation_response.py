from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EmailValidationResponse(SdkBaseModel):
    """A single email validation result object. Fields may be ``true``/``false`` or ``null`` depending on whether a
    check was performed or supported by your plan."""

    email: EmailStr
    """Exact email address as checked."""

    did_you_mean: OptionalNullable[str] = UNSET
    """Suggested correction if a domain-typo is detected; empty string if none."""

    user: OptionalNullable[str] = UNSET
    """Local part (before the @) of the email address."""

    domain: OptionalNullable[str] = UNSET
    """Domain part (after the @) of the email address."""

    format_valid: OptionalNullable[bool] = UNSET
    """Returns true if the email address syntax is valid per RFC rules."""

    mx_found: OptionalNullable[bool] = UNSET
    """True if MX records for the domain were found."""

    smtp_check: OptionalNullable[bool] = UNSET
    """Result of SMTP verification (true = mailbox appears to exist)."""

    catch_all: OptionalNullable[bool] = UNSET
    """True if the domain accepts all emails (catch-all). If catch-all detection was not requested or not permitted on
    plan, this value may be null."""

    role: OptionalNullable[bool] = UNSET
    """True if the email address is a role account (e.g., admin, support)."""

    disposable: OptionalNullable[bool] = UNSET
    """True if the address belongs to a known disposable / temporary provider."""

    free: OptionalNullable[bool] = UNSET
    """True if the email uses a known free provider (e.g., gmail.com)."""

    score: OptionalNullable[float] = UNSET
    """Aggregate quality/deliverability score between 0 (worst) and 1 (best)."""


class EmailValidationResponseDict(TypedDict):
    email: EmailStr
    did_you_mean: NotRequired[str | None]
    user: NotRequired[str | None]
    domain: NotRequired[str | None]
    format_valid: NotRequired[bool | None]
    mx_found: NotRequired[bool | None]
    smtp_check: NotRequired[bool | None]
    catch_all: NotRequired[bool | None]
    role: NotRequired[bool | None]
    disposable: NotRequired[bool | None]
    free: NotRequired[bool | None]
    score: NotRequired[float | None]
