from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_metadata1 import ResponseMetadata1, ResponseMetadata1Dict
from .tenant import Tenant, TenantDict


class ListTenantsResponse(SdkBaseModel):
    """The List tenants response object."""

    metadata: Optional[ResponseMetadata1] = UNSET
    """Additional information for the API invocation, such as the request tracking id."""

    tenants: Optional[list[Tenant]] = UNSET
    """Tenants for the current client."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve the next page of results."""


class ListTenantsResponseDict(TypedDict):
    metadata: NotRequired[ResponseMetadata1Dict]
    tenants: NotRequired[list[TenantDict]]
    next_page_token: NotRequired[str]
