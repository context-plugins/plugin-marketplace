from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AdNetworkReport(SdkBaseModel):
    publication_id: str
    """The prefixed ID of the publication that ran the advertisement."""

    post_id: str
    """The prefixed ID of the post containing the advertisement."""

    ad_link_id: str
    """The ID used to attribute engagement events to the advertisement."""

    opens: int
    """The approved number of unique opens."""

    verified_clicks: int
    """The approved number of verified clicks."""

    revenue: str
    """The formatted revenue approved for payment."""

    is_programmatic: bool
    """Whether the advertisement was placed through a programmatic ad slot instead of an on-demand offer."""


class AdNetworkReportDict(TypedDict):
    publication_id: str
    post_id: str
    ad_link_id: str
    opens: int
    verified_clicks: int
    revenue: str
    is_programmatic: bool
