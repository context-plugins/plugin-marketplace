from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class AllocationDeleteValidationError(SdkBaseModel):
    """Details about why an allocation cannot be deleted."""

    id: Optional[str] = UNSET
    """Allocation ID."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Type of allocation."""

    error: Optional[str] = UNSET
    """Error message explaining why deletion failed."""

    resources: Optional[dict[str, Any]] = UNSET
    """Map of resources using this allocation, keyed by resource type."""


class AllocationDeleteValidationErrorDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[Type1OrStr]
    error: NotRequired[str]
    resources: NotRequired[dict[str, Any]]
