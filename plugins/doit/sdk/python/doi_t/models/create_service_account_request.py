from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateServiceAccountRequest(SdkBaseModel):
    """Fields of a new service account."""

    name: str
    """Name, unique among the customer's service accounts. Leading or trailing whitespace returns ``400``."""

    description: Optional[str] = UNSET
    """Free-text description."""

    permissions: Optional[list[str]] = UNSET
    """Platform permission names in camelCase, for example ``cloudAnalyticsReadOnly``. An unknown name returns
    ``422``."""


class CreateServiceAccountRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    permissions: NotRequired[list[str]]
