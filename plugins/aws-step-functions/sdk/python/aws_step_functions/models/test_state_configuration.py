from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestStateConfiguration(SdkBaseModel):
    retrier_retry_count: Optional[int] = Field(default=UNSET, alias="retrierRetryCount")
    """The number of retry attempts that have occurred for the state's Retry that applies to the mocked error."""

    error_caused_by_state: Optional[str] = Field(default=UNSET, alias="errorCausedByState")
    """The name of the state from which an error originates when an error is mocked for a Map or Parallel state."""

    map_iteration_failure_count: Optional[int] = Field(default=UNSET, alias="mapIterationFailureCount")
    """The number of Map state iterations that failed during the Map state invocation."""

    map_item_reader_data: Optional[str] = Field(default=UNSET, alias="mapItemReaderData")
    """The data read by ItemReader in Distributed Map states as found in its original source."""


class TestStateConfigurationDict(TypedDict):
    retrier_retry_count: NotRequired[int]
    error_caused_by_state: NotRequired[str]
    map_iteration_failure_count: NotRequired[int]
    map_item_reader_data: NotRequired[str]
