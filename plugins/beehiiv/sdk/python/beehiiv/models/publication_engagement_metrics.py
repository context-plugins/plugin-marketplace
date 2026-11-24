from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel


class PublicationEngagementMetrics(SdkBaseModel):
    date: Date
    """The starting date of the period for which the engagement metrics are reported based on the selected
    granularity.<br><br> ``day`` granularity: The specific day.<br> ``week`` granularity: The Monday of the week.<br>
    ``month`` granularity: The first day of the month."""

    total_opens: int
    """The total number of times emails were opened during the period."""

    unique_opens: int
    """The number of unique subscribers who opened emails during the period."""

    total_clicks: int
    """The total number of times links were clicked during the period."""

    total_verified_clicks: int
    """The total number of times links were clicked, during the period, as <a
    href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb">verified
    by our system</a>."""

    unique_clicks: int
    """The number of unique subscribers who clicked links during the period."""

    unique_verified_clicks: int
    """The number of times links were clicked by unique subscribers, during the period, as <a
    href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb">verified
    by our system</a>."""


class PublicationEngagementMetricsDict(TypedDict):
    date: Date
    total_opens: int
    unique_opens: int
    total_clicks: int
    total_verified_clicks: int
    unique_clicks: int
    unique_verified_clicks: int
