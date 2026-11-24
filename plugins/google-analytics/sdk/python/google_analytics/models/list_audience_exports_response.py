from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience_export import AudienceExport, AudienceExportDict


class ListAudienceExportsResponse(SdkBaseModel):
    """A list of all audience exports for a property."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    audience_exports: Optional[list[AudienceExport]] = Field(default=UNSET, alias="audienceExports")
    """Each audience export for a property."""


class ListAudienceExportsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    audience_exports: NotRequired[list[AudienceExportDict]]
