from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DeliveriesRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dataset: str
    """Dataset key from /v1/deliveries/datasets. Current keys: associations, vendors, statutes, building-safety,
    report-card, changes."""

    format: Optional[str] = UNSET
    """``csv`` (default) or ``jsonl``."""

    mode: Optional[str] = UNSET
    """``snapshot`` for the dataset as it stands, or ``changes`` for what moved inside the window your plan allows."""

    filters: Optional[Any] = UNSET
    """Dataset-specific filters, in the same vocabulary as the matching read endpoint."""

    columns: Optional[list[str]] = UNSET
    """Subset of the dataset's column dictionary. Narrowing only; it can never add a column the dictionary does not
    already publish."""

    label: Optional[str] = UNSET
    """Your own label for the run, echoed back on status and in the manifest."""


class ApiV1DeliveriesRequestDict(TypedDict):
    dataset: str
    format: NotRequired[str]
    mode: NotRequired[str]
    filters: NotRequired[Any]
    columns: NotRequired[list[str]]
    label: NotRequired[str]
