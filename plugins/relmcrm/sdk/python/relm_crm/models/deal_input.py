from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DealInput(SdkBaseModel):
    title: str
    value_cents: Optional[int] = UNSET
    currency: Optional[str] = UNSET
    pipeline: Optional[str] = UNSET
    """Pipeline key or pl_ id (defaults to the default pipeline)."""

    stage: Optional[str] = UNSET
    """Stage key within the deal's pipeline."""

    company_id: Optional[str] = UNSET
    primary_contact_id: Optional[str] = UNSET
    close_date: Optional[str] = UNSET
    custom_fields: Optional[Any] = UNSET


class DealInputDict(TypedDict):
    title: str
    value_cents: NotRequired[int]
    currency: NotRequired[str]
    pipeline: NotRequired[str]
    stage: NotRequired[str]
    company_id: NotRequired[str]
    primary_contact_id: NotRequired[str]
    close_date: NotRequired[str]
    custom_fields: NotRequired[Any]
