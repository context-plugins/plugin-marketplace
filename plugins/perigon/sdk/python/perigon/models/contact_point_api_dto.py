from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.type import TypeOrStr


class ContactPointApiDto(SdkBaseModel):
    """Contact point used to deliver monitor notifications."""

    uuid: OptionalNullable[UUID] = UNSET
    """Unique identifier for the contact point."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the contact point was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the contact point was last updated, in ISO 8601 format."""

    type_: OptionalNullable[TypeOrStr] = Field(default=UNSET, alias="type")
    """Delivery channel type. API-managed contact points use WEBHOOK."""

    status: OptionalNullable[StatusOrStr] = UNSET
    """Current lifecycle status of the contact point."""

    name: OptionalNullable[str] = UNSET
    """Display name for the contact point."""

    email: OptionalNullable[str] = UNSET
    """Email address when the contact point type is email-based."""

    webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="webhookUrl")
    """HTTPS webhook URL that receives monitor notifications."""

    webhook_secret: OptionalNullable[str] = Field(default=UNSET, alias="webhookSecret")
    """Secret used to sign webhook deliveries."""

    verified_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="verifiedAt")
    """Date and time the contact point was verified, in ISO 8601 format."""

    verified: OptionalNullable[bool] = UNSET


class ContactPointApiDtoDict(TypedDict):
    uuid: NotRequired[UUID | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    type_: NotRequired[TypeOrStr | None]
    status: NotRequired[StatusOrStr | None]
    name: NotRequired[str | None]
    email: NotRequired[str | None]
    webhook_url: NotRequired[str | None]
    webhook_secret: NotRequired[str | None]
    verified_at: NotRequired[RFC3339DateTime | None]
    verified: NotRequired[bool | None]
