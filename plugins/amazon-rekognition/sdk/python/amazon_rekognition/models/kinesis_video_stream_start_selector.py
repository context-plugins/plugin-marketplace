from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KinesisVideoStreamStartSelector(SdkBaseModel):
    producer_timestamp: Optional[int] = Field(default=UNSET, alias="ProducerTimestamp")
    """The timestamp from the producer corresponding to the fragment, in milliseconds, expressed in unix time format."""

    fragment_number: Optional[str] = Field(default=UNSET, alias="FragmentNumber")
    """The unique identifier of the fragment. This value monotonically increases based on the ingestion order."""


class KinesisVideoStreamStartSelectorDict(TypedDict):
    producer_timestamp: NotRequired[int]
    fragment_number: NotRequired[str]
