from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_contact import CustomerContact, CustomerContactDict
from .customer_settings import CustomerSettings, CustomerSettingsDict


class CustomerUpdate(SdkBaseModel):
    """Partial update to a customer's general settings. Every field is optional; only fields present in the request body
    are changed. Fields are nested exactly as the ``getCustomer`` response nests them. See the operation description for
    ``urlSlug``'s null-vs-absent semantics, which differ from every other field."""

    url_slug: Optional[str] = Field(default=UNSET, alias="urlSlug")
    """The customer's URL display name. An explicit empty string removes the active slug; a non-empty value must be 3-12
    characters of lowercase letters, digits, or dashes, starting and ending with a letter or digit, and must be unique
    across all customers."""

    settings: Optional[CustomerSettings] = UNSET
    """Customer settings. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body so a value is
    always read and written at the same path.

    ``currency`` accepts only the listed codes; any other value is rejected with ``400``. Unlike ``urlSlug`` and
    ``allowedInviteDomains`` it cannot be cleared - no value unsets it."""

    contact: Optional[CustomerContact] = UNSET
    """Customer point-of-contact details. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body
    so a value is always read and written at the same path."""


class CustomerUpdateDict(TypedDict):
    url_slug: NotRequired[str]
    settings: NotRequired[CustomerSettingsDict]
    contact: NotRequired[CustomerContactDict]
