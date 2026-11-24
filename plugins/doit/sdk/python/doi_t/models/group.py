from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimensions_types import DimensionsTypesOrStr
from .limit import Limit, LimitDict


class Group(SdkBaseModel):
    """The dimension that defines a row in the report."""

    id: Optional[str] = UNSET
    """Dimension ID."""

    limit: Optional[Limit] = UNSET
    """To limit the number of results based on ranking. See `Limit by rank
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom>`__."""

    type_: Optional[DimensionsTypesOrStr] = Field(default=UNSET, alias="type")
    """Dimension filter type. Always pair ``type`` with ``id`` on scope filters. Discover valid ``id`` + ``type`` pairs
    for your account with ``GET /analytics/v1/dimensions``. ``allocation_rule`` replaces ``attribution``; ``allocation``
    replaces ``attribution_group``."""


class GroupDict(TypedDict):
    id: NotRequired[str]
    limit: NotRequired[LimitDict]
    type_: NotRequired[DimensionsTypesOrStr]
