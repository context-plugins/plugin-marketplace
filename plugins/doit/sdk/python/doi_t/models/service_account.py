from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ServiceAccount(SdkBaseModel):
    """A non-human identity owned by a customer. Its API tokens authenticate with exactly the permissions listed
    here."""

    id: str | None
    """Service account ID. ``null`` only on a dry-run create."""

    customer_id: str = Field(alias="customerId")
    """ID of the customer that owns the service account."""

    name: str
    """Name, unique among the customer's service accounts."""

    description: str
    """Free-text description."""

    permissions: list[str]
    """Platform permission names in camelCase, as shown in the DoiT console role editor."""

    created_by: str | None = Field(alias="createdBy")
    """Display name of the user who created the service account. ``null`` when unknown or when the service account was
    created with a service account token."""

    created_by_email: str | None = Field(alias="createdByEmail")
    """Email of the user who created the service account. ``null`` when unknown or when the service account was created
    with a service account token."""

    created_by_user_id: str | None = Field(alias="createdByUserId")
    """ID of the user who created the service account. ``null`` when unknown or when the service account was created
    with a service account token."""

    create_time: RFC3339DateTime | None = Field(alias="createTime")
    """When the service account was created."""

    update_time: RFC3339DateTime | None = Field(alias="updateTime")
    """When the service account was last changed."""

    etag: str | None
    """Current version of the service account. Send it in ``If-Match`` to update or delete."""


class ServiceAccountDict(TypedDict):
    id: str | None
    customer_id: str
    name: str
    description: str
    permissions: list[str]
    created_by: str | None
    created_by_email: str | None
    created_by_user_id: str | None
    create_time: RFC3339DateTime | None
    update_time: RFC3339DateTime | None
    etag: str | None
