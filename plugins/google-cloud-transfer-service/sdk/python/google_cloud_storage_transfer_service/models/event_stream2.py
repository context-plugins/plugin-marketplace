from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventStream2(SdkBaseModel):
    """Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the
    Schedule fields are ignored."""

    event_stream_expiration_time: Optional[str] = Field(default=UNSET, alias="eventStreamExpirationTime")
    """Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After
    this time, any transfers in progress will complete, but no new transfers are initiated."""

    name: Optional[str] = UNSET
    """Required. Specifies a unique name of the resource such as AWS SQS ARN in the form
    'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form
    'projects/{project}/subscriptions/{sub}'."""

    event_stream_start_time: Optional[str] = Field(default=UNSET, alias="eventStreamStartTime")
    """Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no
    start time is specified or start time is in the past, Storage Transfer Service starts listening immediately."""


class EventStream2Dict(TypedDict):
    event_stream_expiration_time: NotRequired[str]
    name: NotRequired[str]
    event_stream_start_time: NotRequired[str]
