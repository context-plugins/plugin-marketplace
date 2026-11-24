from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_external_api_list_item import DimensionExternalApiListItem, DimensionExternalApiListItemDict


class DimensionsExternalApiListResponse(SdkBaseModel):
    """Paged list of available dimensions."""

    dimensions: Optional[list[DimensionExternalApiListItem]] = UNSET
    """Array of dimensions."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")


class DimensionsExternalApiListResponseDict(TypedDict):
    dimensions: NotRequired[list[DimensionExternalApiListItemDict]]
    page_token: NotRequired[str]
    row_count: NotRequired[int]
