from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimensions_types import DimensionsTypesOrStr


class DimensionExternalApiListItem(SdkBaseModel):
    """Summary information about a dimension."""

    id: Optional[str] = UNSET
    """The identifier of the dimension."""

    label: Optional[str] = UNSET
    """The label of the dimension."""

    type_: Optional[DimensionsTypesOrStr] = Field(default=UNSET, alias="type")
    """Dimension filter type. Always pair ``type`` with ``id`` on scope filters. Discover valid ``id`` + ``type`` pairs
    for your account with ``GET /analytics/v1/dimensions``. ``allocation_rule`` replaces ``attribution``; ``allocation``
    replaces ``attribution_group``."""


class DimensionExternalApiListItemDict(TypedDict):
    id: NotRequired[str]
    label: NotRequired[str]
    type_: NotRequired[DimensionsTypesOrStr]
