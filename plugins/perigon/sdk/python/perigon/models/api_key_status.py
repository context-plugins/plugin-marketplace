from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiKeyStatus(SdkBaseModel):
    """Validity and status of a single API key."""

    key_preview: OptionalNullable[str] = Field(default=UNSET, alias="keyPreview")
    """Masked preview of the supplied API key."""

    valid: OptionalNullable[bool] = UNSET
    """Whether the supplied API key is valid and belongs to the authenticated account."""

    enabled: OptionalNullable[bool] = UNSET
    """Whether the API key is enabled. A disabled ('off') key is valid but cannot be used to make requests. False when
    the key is not valid."""

    subscription_active: OptionalNullable[bool] = Field(default=UNSET, alias="subscriptionActive")
    """Whether the account owning the key has an active subscription or trial."""

    request_count: OptionalNullable[int] = Field(default=UNSET, alias="requestCount")
    """Approx number of requests made with this API key in this billing cycle."""


class ApiKeyStatusDict(TypedDict):
    key_preview: NotRequired[str | None]
    valid: NotRequired[bool | None]
    enabled: NotRequired[bool | None]
    subscription_active: NotRequired[bool | None]
    request_count: NotRequired[int | None]
