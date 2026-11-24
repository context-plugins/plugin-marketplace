from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvoicesRequest1(SdkBaseModel):
    description: Optional[str] = UNSET
    receipt: Optional[str] = UNSET
    comment: Optional[str] = UNSET
    terms: Optional[str] = UNSET
    partial_payment: Optional[bool] = UNSET
    expire_by: Optional[int] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    line_items: Optional[list[Any]] = UNSET
    """Replaces existing line items. Draft status only."""


class InvoicesRequest1Dict(TypedDict):
    description: NotRequired[str]
    receipt: NotRequired[str]
    comment: NotRequired[str]
    terms: NotRequired[str]
    partial_payment: NotRequired[bool]
    expire_by: NotRequired[int]
    notes: NotRequired[dict[str, str]]
    line_items: NotRequired[list[Any]]
