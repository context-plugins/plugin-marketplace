from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .destination2 import Destination2, Destination2Dict
from .event_filter import EventFilter, EventFilterDict
from .retry_policy2 import RetryPolicy2, RetryPolicy2Dict
from .state_condition import StateCondition, StateConditionDict
from .transport2 import Transport2, Transport2Dict


class Trigger(SdkBaseModel):
    """A representation of the trigger resource."""

    uid: Optional[str] = UNSET
    """Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""

    name: Optional[str] = UNSET
    """Required. The resource name of the trigger. Must be unique within the location of the project and must be in
    ``projects/{project}/locations/{location}/triggers/{trigger}`` format."""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields, and might be sent only
    on create requests to ensure that the client has an up-to-date value before proceeding."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Whether or not this Trigger satisfies the requirements of physical zone separation"""

    event_data_content_type: Optional[str] = Field(default=UNSET, alias="eventDataContentType")
    """Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent
    data field. This is set to ``application/json`` if the value is not defined."""

    event_filters: Optional[list[EventFilter]] = Field(default=UNSET, alias="eventFilters")
    """Optional. Unordered list. The list of filters that applies to event attributes. Only events that match all the
    provided filters are sent to the destination."""

    conditions: Optional[dict[str, StateCondition]] = UNSET
    """Output only. The reason(s) why a trigger is in FAILED state."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. The IAM service account email associated with the trigger. The service account represents the identity
    of the trigger. The ``iam.serviceAccounts.actAs`` permission must be granted on the service account to allow a
    principal to impersonate the service account. For more information, see the `Roles and permissions
    </eventarc/docs/all-roles-permissions>`__ page specific to the trigger destination."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. User labels attached to the triggers that can be used to group resources."""

    transport: Optional[Transport2] = UNSET
    """Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport intermediary. This
    field contains a reference to that transport intermediary. This information can be used for debugging purposes."""

    channel: Optional[str] = UNSET
    """Optional. The name of the channel associated with the trigger in
    ``projects/{project}/locations/{location}/channels/{channel}`` format. You must provide a channel to receive events
    from Eventarc SaaS partners."""

    destination: Optional[Destination2] = UNSET
    """Required. Destination specifies where the events should be sent to."""

    retry_policy: Optional[RetryPolicy2] = Field(default=UNSET, alias="retryPolicy")
    """Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up to 24 hours by
    default: https://cloud.google.com/eventarc/docs/retry-events"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""


class TriggerDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    etag: NotRequired[str]
    update_time: NotRequired[str]
    satisfies_pzs: NotRequired[bool]
    event_data_content_type: NotRequired[str]
    event_filters: NotRequired[list[EventFilterDict]]
    conditions: NotRequired[dict[str, StateConditionDict]]
    service_account: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    transport: NotRequired[Transport2Dict]
    channel: NotRequired[str]
    destination: NotRequired[Destination2Dict]
    retry_policy: NotRequired[RetryPolicy2Dict]
    create_time: NotRequired[str]
