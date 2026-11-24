from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency import CurrencyOrStr


class CustomerSettings(SdkBaseModel):
    """Customer settings. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body so a value is
    always read and written at the same path.

    ``currency`` accepts only the listed codes; any other value is rejected with ``400``. Unlike ``urlSlug`` and
    ``allowedInviteDomains`` it cannot be cleared - no value unsets it."""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    allowed_invite_domains: Optional[list[str]] = Field(default=UNSET, alias="allowedInviteDomains")
    """Email domains allowed to self-invite into the customer. Updating this field requires the ``UsersManager``
    permission in addition to ``Settings``. An empty array clears the list."""

    mfa_required: Optional[bool] = Field(default=UNSET, alias="mfaRequired")
    """Whether users of this customer are required to enroll in multi-factor authentication. A missing value is treated
    as ``true``. Disabling this does not remove MFA enrollments existing users already have."""


class CustomerSettingsDict(TypedDict):
    currency: NotRequired[CurrencyOrStr]
    allowed_invite_domains: NotRequired[list[str]]
    mfa_required: NotRequired[bool]
