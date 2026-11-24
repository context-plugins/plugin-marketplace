from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_nat_address import GoogleCloudApigeeV1NatAddress, GoogleCloudApigeeV1NatAddressDict


class GoogleCloudApigeeV1ListNatAddressesResponse(SdkBaseModel):
    """Response for ListNatAddresses."""

    nat_addresses: Optional[list[GoogleCloudApigeeV1NatAddress]] = Field(default=UNSET, alias="natAddresses")
    """List of NAT Addresses for the instance."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted,
    no subsequent pages exist."""


class GoogleCloudApigeeV1ListNatAddressesResponseDict(TypedDict):
    nat_addresses: NotRequired[list[GoogleCloudApigeeV1NatAddressDict]]
    next_page_token: NotRequired[str]
