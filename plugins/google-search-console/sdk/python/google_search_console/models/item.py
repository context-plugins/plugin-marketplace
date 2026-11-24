from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rich_results_issue import RichResultsIssue, RichResultsIssueDict


class Item(SdkBaseModel):
    """A specific rich result found on the page."""

    issues: Optional[list[RichResultsIssue]] = UNSET
    """A list of zero or more rich result issues found for this instance."""

    name: Optional[str] = UNSET
    """The user-provided name of this item."""


class ItemDict(TypedDict):
    issues: NotRequired[list[RichResultsIssueDict]]
    name: NotRequired[str]
