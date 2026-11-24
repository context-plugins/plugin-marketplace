from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .database_summary import DatabaseSummary, DatabaseSummaryDict
from .enums.catalog_type import CatalogTypeOrStr


class CatalogSummary(SdkBaseModel):
    """Summary of results for a specific destination catalog."""

    catalog_type: Optional[CatalogTypeOrStr] = Field(default=UNSET, alias="catalogType")
    """Output only. The type of the catalog."""

    catalog: Optional[str] = UNSET
    """Output only. The catalog resource name (format: projects/*/catalogs/*)."""

    database_summaries: Optional[list[DatabaseSummary]] = Field(default=UNSET, alias="databaseSummaries")
    """Output only. Summary of results for each database in the catalog."""


class CatalogSummaryDict(TypedDict):
    catalog_type: NotRequired[CatalogTypeOrStr]
    catalog: NotRequired[str]
    database_summaries: NotRequired[list[DatabaseSummaryDict]]
