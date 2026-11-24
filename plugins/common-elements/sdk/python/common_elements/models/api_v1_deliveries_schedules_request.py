from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DeliveriesSchedulesRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dataset: str
    """Dataset key. Fixed at creation, because it is what entitlement was checked against. Current keys: associations,
    vendors, statutes, building-safety, report-card, changes."""

    cadence: str
    """``daily``, ``weekly``, or ``monthly``."""

    format: Optional[str] = UNSET
    """``csv`` (default) or ``jsonl``. Fixed at creation."""

    mode: Optional[str] = UNSET
    """``snapshot`` or ``changes``. Fixed at creation."""

    filters: Optional[Any] = UNSET
    """Dataset-specific filters. Editable later with PATCH."""

    columns: Optional[list[str]] = UNSET
    """Subset of the dataset's column dictionary. Editable later."""

    target: Optional[Any] = UNSET
    """Where to deliver. An unimplemented target type is refused with 501 ``not_implemented`` rather than accepted and
    silently dropped."""


class ApiV1DeliveriesSchedulesRequestDict(TypedDict):
    dataset: str
    cadence: str
    format: NotRequired[str]
    mode: NotRequired[str]
    filters: NotRequired[Any]
    columns: NotRequired[list[str]]
    target: NotRequired[Any]
