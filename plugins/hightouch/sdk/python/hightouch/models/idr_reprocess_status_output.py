from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr


class IdrReprocessStatusOutput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Status1OrStr
    """"queueing": The identifiers are being queued for reprocessing. "queued": The identifiers have been queued and
    added to the blocklist. Their associated clusters will be reprocessed next time the graph runs. "reprocessed": The
    identifiers' clusters have been reprocessed during a run. "failed": We failed to queue the identifiers for
    reprocessing. "cancelled": The reprocessing request has been cancelled."""

    queued_at: RFC3339DateTime | None = Field(alias="queuedAt")
    """Set if the status is "queued" or "reprocessed". The timestamp when the identifiers were queued for
    reprocessing."""

    reprocessed_at: RFC3339DateTime | None = Field(alias="reprocessedAt")
    """Set if the status is "reprocessed". The timestamp when the identifiers' clusters were reprocessed."""

    reprocessed_run_id: str | None = Field(alias="reprocessedRunId")
    """Set if the status is "reprocessed". The ID of the run that reprocessed the identifiers' clusters."""

    record_found: list[bool] | None = Field(alias="recordFound")
    """One result per identifier, in the order they were submitted. True if the identifier was found in the graph at the
    start of the run that processed the request. Null until the request is processed, and on requests submitted before
    this field existed on the API."""

    error: str | None
    """If available, the error message from failing to queue the identifiers for reprocessing."""


class IdrReprocessStatusOutputDict(TypedDict):
    status: Status1OrStr
    queued_at: RFC3339DateTime | None
    reprocessed_at: RFC3339DateTime | None
    reprocessed_run_id: str | None
    record_found: list[bool] | None
    error: str | None
