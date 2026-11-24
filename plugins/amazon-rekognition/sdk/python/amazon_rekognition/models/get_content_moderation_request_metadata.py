from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregate_by1 import AggregateBy1OrStr
from .enums.sort_by1 import SortBy1OrStr


class GetContentModerationRequestMetadata(SdkBaseModel):
    sort_by: Optional[SortBy1OrStr] = Field(default=UNSET, alias="SortBy")
    """The sorting method chosen for a GetContentModeration request."""

    aggregate_by: Optional[AggregateBy1OrStr] = Field(default=UNSET, alias="AggregateBy")
    """The aggregation method chosen for a GetContentModeration request."""


class GetContentModerationRequestMetadataDict(TypedDict):
    sort_by: NotRequired[SortBy1OrStr]
    aggregate_by: NotRequired[AggregateBy1OrStr]
