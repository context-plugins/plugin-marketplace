from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExcludedClass(SdkBaseModel):
    """What one ``?exclude=`` class cost, measured against the caller's own filter."""

    grants: Optional[int] = UNSET
    """Rows dropped. Null when the cost could not be measured — see ``unavailable``."""

    dollars: Optional[int] = UNSET
    """Dollars dropped. Null when the cost could not be measured."""

    definition: Optional[str] = UNSET
    """What this class means, single-sourced from config/candid-compat.json."""

    unavailable: Optional[str] = UNSET
    """Present only when the accounting failed. The totals in the response are unaffected — a failed measurement never
    fails a correct answer."""


class ExcludedClassDict(TypedDict):
    grants: NotRequired[int]
    dollars: NotRequired[int]
    definition: NotRequired[str]
    unavailable: NotRequired[str]
