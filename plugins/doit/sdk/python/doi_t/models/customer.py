from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_contact import CustomerContact, CustomerContactDict
from .customer_settings import CustomerSettings, CustomerSettingsDict


class Customer(SdkBaseModel):
    """Customer scoped to the authenticated tenant, including its settings and contact info."""

    id: str
    """Customer ID."""

    name: Optional[str] = UNSET
    """Customer name."""

    primary_domain: Optional[str] = Field(default=UNSET, alias="primaryDomain")
    """Customer's primary domain."""

    domains: Optional[list[str]] = UNSET
    """Domains associated with the customer."""

    url_slug: Optional[str] = Field(default=UNSET, alias="urlSlug")
    """The customer's active URL display name, used in Console URLs."""

    settings: Optional[CustomerSettings] = UNSET
    """Customer settings. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body so a value is
    always read and written at the same path.

    ``currency`` accepts only the listed codes; any other value is rejected with ``400``. Unlike ``urlSlug`` and
    ``allowedInviteDomains`` it cannot be cleared - no value unsets it."""

    contact: Optional[CustomerContact] = UNSET
    """Customer point-of-contact details. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body
    so a value is always read and written at the same path."""


class CustomerDict(TypedDict):
    id: str
    name: NotRequired[str]
    primary_domain: NotRequired[str]
    domains: NotRequired[list[str]]
    url_slug: NotRequired[str]
    settings: NotRequired[CustomerSettingsDict]
    contact: NotRequired[CustomerContactDict]
