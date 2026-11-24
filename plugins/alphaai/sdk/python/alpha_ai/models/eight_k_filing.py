from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, RFC3339DateTime, SdkBaseModel


class EightKFiling(SdkBaseModel):
    """Structured SEC 8-K filing: what the filing itself says, next to the AI read of it. One news row fronts one
    filing."""

    items: list[str]
    """Every item code the filing carries, in the filing's order (``["5.02", "9.01"]``). ``?item=`` matches any of them.
    Empty for a filing SEC served no document for (header-only)."""

    primary_item: OptionalNullable[str] = UNSET
    """The item that drove the row's ``category`` (``2.02`` → ``earnings``, ``2.01`` → ``mergers_acquisitions``, the
    rest → ``corporate_actions``). ``null`` when the filing lists no items."""

    accession_number: str
    """SEC accession number of the filing — the id to cite."""

    filed_at: RFC3339DateTime
    """When EDGAR accepted the filing (UTC)."""

    event_date: OptionalNullable[Date] = UNSET
    """The filing's own "date of report" — the date of the event it reports, which can precede ``filed_at`` by up to
    four business days. ``null`` when the header carries none."""

    exhibit_url: OptionalNullable[str] = UNSET
    """The press-release exhibit (EX-99.x) the summary was built from, on sec.gov. ``null`` when the filing has no such
    exhibit (the summary then reads the cover document)."""


class EightKFilingDict(TypedDict):
    items: list[str]
    primary_item: NotRequired[str | None]
    accession_number: str
    filed_at: RFC3339DateTime
    event_date: NotRequired[Date | None]
    exhibit_url: NotRequired[str | None]
