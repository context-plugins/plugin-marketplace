from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpdateServiceAccountRequest(SdkBaseModel):
    """Fields to change on a service account, as a JSON Merge Patch document."""

    name: Optional[str] = UNSET
    """New name, unique among the customer's service accounts. Leading or trailing whitespace returns ``400``."""

    description: OptionalNullable[str] = UNSET
    """New free-text description. ``null`` leaves it unchanged; an explicit empty string clears it."""

    permissions: OptionalNullable[list[str]] = UNSET
    """Replaces the whole permission list. An unknown name returns ``422``."""


class UpdateServiceAccountRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str | None]
    permissions: NotRequired[list[str] | None]
