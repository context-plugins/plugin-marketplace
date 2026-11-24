from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TableWrite(SdkBaseModel):
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    added: Optional[int] = UNSET
    """Number of new entities added to the table by this call."""

    already_present: Optional[int] = Field(default=UNSET, alias="alreadyPresent")
    """Number of entities from this call that were already in the table."""

    columns_created: Optional[int] = Field(default=UNSET, alias="columnsCreated")
    """Number of columns auto-created by this call (e.g. a Signals column created on first use)."""

    rows_processed: Optional[int] = Field(default=UNSET, alias="rowsProcessed")
    """Number of rows the column-run touched as part of this call."""

    rows_charged: Optional[int] = Field(default=UNSET, alias="rowsCharged")
    """Number of those rows that incurred a credit charge."""

    rows_already_paid_in_table: Optional[int] = Field(default=UNSET, alias="rowsAlreadyPaidInTable")
    """Number of those rows that were already paid for in this table and were not re-charged."""

    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")
    """Credits charged specifically for this table write."""


class TableWriteDict(TypedDict):
    table_id: NotRequired[str]
    added: NotRequired[int]
    already_present: NotRequired[int]
    columns_created: NotRequired[int]
    rows_processed: NotRequired[int]
    rows_charged: NotRequired[int]
    rows_already_paid_in_table: NotRequired[int]
    credits_charged: NotRequired[int]
