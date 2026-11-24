from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .link2 import Link2, Link2Dict


class Customer1(SdkBaseModel):
    id: str
    """The unique ID of the customer. You may use either the customer's ``id`` on CodeQR (obtained via ``/customers``
    endpoint) or their ``externalId`` (unique ID within your system, prefixed with ``ext_``, e.g. ``ext_123``)."""

    external_id: str = Field(alias="externalId")
    """Unique identifier for the customer in the client's app."""

    name: str
    """Name of the customer."""

    email: OptionalNullable[str] = UNSET
    """Email of the customer."""

    avatar: OptionalNullable[str] = UNSET
    """Avatar URL of the customer."""

    country: OptionalNullable[str] = UNSET
    """Country of the customer."""

    created_at: str = Field(alias="createdAt")
    """The date the customer was created."""

    link: OptionalNullable[Link2] = UNSET
    custom_fields: OptionalNullable[dict[str, str]] = Field(default=UNSET, alias="customFields")
    """Custom fields of the customer."""


class Customer1Dict(TypedDict):
    id: str
    external_id: str
    name: str
    email: NotRequired[str | None]
    avatar: NotRequired[str | None]
    country: NotRequired[str | None]
    created_at: str
    link: NotRequired[Link2Dict | None]
    custom_fields: NotRequired[dict[str, str] | None]
