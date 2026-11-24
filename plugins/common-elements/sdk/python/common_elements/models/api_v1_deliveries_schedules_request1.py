from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DeliveriesSchedulesRequest1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    cadence: Optional[str] = UNSET
    """``daily``, ``weekly``, or ``monthly``."""

    filters: Optional[Any] = UNSET
    """Replacement filters, re-validated against the dataset."""

    columns: Optional[list[str]] = UNSET
    """Replacement column subset, re-validated against the dictionary."""

    paused: Optional[bool] = UNSET
    """Pause or resume. Resuming recomputes the next run from now, so a schedule paused for a month does not wake and
    fire a backlog."""


class ApiV1DeliveriesSchedulesRequest1Dict(TypedDict):
    cadence: NotRequired[str]
    filters: NotRequired[Any]
    columns: NotRequired[list[str]]
    paused: NotRequired[bool]
