from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Data1CommonelementsComVendorsApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Review id."""

    rating: Optional[float] = UNSET
    """1 to 5."""

    body: Optional[str] = UNSET
    """Review text."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Review lifecycle timestamps."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Review lifecycle timestamps."""


class Data1CommonelementsComVendorsApiDict(TypedDict):
    id: NotRequired[UUID]
    rating: NotRequired[float]
    body: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
