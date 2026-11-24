from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_turn_record import TestSetTurnRecord, TestSetTurnRecordDict


class ListTestSetRecordsResponse(SdkBaseModel):
    test_set_records: Optional[list[TestSetTurnRecord]] = Field(default=UNSET, alias="testSetRecords")
    """The list of records from the test set."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more records to return in a response to the ListTestSetRecords
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListTestSetRecords operation request to get the next page of records."""


class ListTestSetRecordsResponseDict(TypedDict):
    test_set_records: NotRequired[list[TestSetTurnRecordDict]]
    next_token: NotRequired[str]
