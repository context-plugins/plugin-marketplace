from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Metadata1(SdkBaseModel):
    """Metadata information about the query executed."""

    errors: Optional[list[str]] = UNSET
    """List of error messages as strings."""

    notices: Optional[list[str]] = UNSET
    """List of additional information such as data source, if result was truncated. For example: ```` "notices": [
    "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed",
    "Table used: edge.api.uapgroup2.agg_api" ]````"""


class GoogleCloudApigeeV1Metadata1Dict(TypedDict):
    errors: NotRequired[list[str]]
    notices: NotRequired[list[str]]
