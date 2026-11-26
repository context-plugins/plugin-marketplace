from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrganizationProcessingOptions(SdkBaseModel):
    """User provided options for having the same mailing address as the physical address."""

    mailing_address_same_as_physical: Optional[bool] = Field(default=UNSET, alias="mailingAddressSameAsPhysical")
    """Set as ``true`` if the mailing address is the same as the physical address. The default value is ``true``."""

    individual_transfer_out: Optional[bool] = Field(default=UNSET, alias="individualTransferOut")
    """Rule for how ACH transfers are made from the organization funding bank account to vendors.
    * Set as ``true`` for an individual ACH transfer for each payment made.
    * Set as ``false`` for a single batch ACH transfer for all payments made in a day. The default value is ``false``.

    **Note**: You can set this field only when you update an organization (``PATCH
    /v3/organizations/{organizationId}``)."""

    individual_transfer_in: Optional[bool] = Field(default=UNSET, alias="individualTransferIn")
    """Rule for how ACH transfers are made from customers to the organization funding bank account.
    * Set as ``true`` for an individual ACH transfer for each payment received.
    * Set as ``false`` for a single batch ACH transfer for all payments received in a day. The default value is
        ``false``.

    **Note**: You can set this field only when you update an organization (``PATCH
    /v3/organizations/{organizationId}``)."""


class OrganizationProcessingOptionsDict(TypedDict):
    mailing_address_same_as_physical: NotRequired[bool]
    individual_transfer_out: NotRequired[bool]
    individual_transfer_in: NotRequired[bool]
