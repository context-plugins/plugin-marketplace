from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.recommendation1 import Recommendation1OrStr
from .failed import Failed, FailedDict
from .lookup import Lookup, LookupDict


class Read(SdkBaseModel):
    """What to show a human: render this and nothing else."""

    headline: Optional[str] = UNSET
    recommendation: Optional[Recommendation1OrStr] = UNSET
    passed: Optional[int] = UNSET
    total: Optional[int] = UNSET
    """Checks that ran (status pass or fail) and decide (severity block or warn), plus location consistency, which is
    counted but never decides"""

    reason: Optional[str] = UNSET
    """Why a read with no registry match is not engage, e.g. "Not found on the registers Jid checks for Indonesia (LEI
    records only)". Also in the headline, followed by ", so: verify first"."""

    not_checked: Optional[list[str]] = UNSET
    """Labels of deciding checks that did not run or did not finish"""

    sender: Optional[str] = UNSET
    """Qualify only, response only (never stored): the Jid Signals location next to the stated place and the company
    domain's age"""

    failed: Optional[list[Failed]] = UNSET
    lookups: Optional[list[Lookup]] = UNSET
    file_url: Optional[str] = UNSET
    subject: OptionalNullable[str] = UNSET


class ReadDict(TypedDict):
    headline: NotRequired[str]
    recommendation: NotRequired[Recommendation1OrStr]
    passed: NotRequired[int]
    total: NotRequired[int]
    reason: NotRequired[str]
    not_checked: NotRequired[list[str]]
    sender: NotRequired[str]
    failed: NotRequired[list[FailedDict]]
    lookups: NotRequired[list[LookupDict]]
    file_url: NotRequired[str]
    subject: NotRequired[str | None]
