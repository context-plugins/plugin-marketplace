from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4_doi_t_reports_api import Type4DoiTReportsApiOrStr


class ExternalSplitTarget(SdkBaseModel):
    """Target and value of a split definition."""

    id: Optional[str] = UNSET
    """ID of the target."""

    type_: Optional[Type4DoiTReportsApiOrStr] = Field(default=UNSET, alias="type")
    """Type of the target. If split type is "attribution_group", then target type must be "attribution". Otherwise split
    types and target types must be the same."""

    value: Optional[float] = UNSET
    """Percent of the target, represented in float format. E.g. 30% is 0.3. Required only if the Split Mode is
    custom."""


class ExternalSplitTargetDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[Type4DoiTReportsApiOrStr]
    value: NotRequired[float]
