from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpannerProfile(SdkBaseModel):
    """Profile for connecting to a Spanner source."""

    host: Optional[str] = UNSET
    """Optional. The Spanner endpoint to connect to. Defaults to the global endpoint (https://spanner.googleapis.com).
    Must be in the format: https://spanner.{region}.rep.googleapis.com."""

    database: Optional[str] = UNSET
    """Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the format:
    projects/{project}/instances/{instance}/databases/{database_id}."""


class SpannerProfileDict(TypedDict):
    host: NotRequired[str]
    database: NotRequired[str]
