from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config4 import LoggingConfig4, LoggingConfig4Dict
from .organization_subscription2 import OrganizationSubscription2, OrganizationSubscription2Dict
from .project_subscriptions2 import ProjectSubscriptions2, ProjectSubscriptions2Dict


class GoogleApiSource(SdkBaseModel):
    """Represents a subscription to first-party events for a MessageBus resource. A GoogleApiSource resource lets you
    configure the delivery of events from Google API sources to a designated bus."""

    logging_config: Optional[LoggingConfig4] = Field(default=UNSET, alias="loggingConfig")
    """Optional. Config to control Platform logging for the GoogleApiSource."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. Resource annotations."""

    uid: Optional[str] = UNSET
    """Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""

    crypto_key_name: Optional[str] = Field(default=UNSET, alias="cryptoKeyName")
    """Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It
    must match the pattern ``projects/*/locations/*/keyRings/*/cryptoKeys/*``."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Resource display name."""

    organization_subscription: Optional[OrganizationSubscription2] = Field(
        default=UNSET, alias="organizationSubscription"
    )
    """Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the form
    projects/{project}/locations/{location}/googleApiSources/{google_api_source}"""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields, and might be sent only
    on update and delete requests to ensure that the client has an up-to-date value before proceeding."""

    project_subscriptions: Optional[ProjectSubscriptions2] = Field(default=UNSET, alias="projectSubscriptions")
    """Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the
    same org as the GoogleApiSource."""

    destination: Optional[str] = UNSET
    """Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be point to the full
    resource name of a MessageBus. Format: "projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)"""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""


class GoogleApiSourceDict(TypedDict):
    logging_config: NotRequired[LoggingConfig4Dict]
    annotations: NotRequired[dict[str, str]]
    uid: NotRequired[str]
    create_time: NotRequired[str]
    crypto_key_name: NotRequired[str]
    display_name: NotRequired[str]
    organization_subscription: NotRequired[OrganizationSubscription2Dict]
    name: NotRequired[str]
    etag: NotRequired[str]
    project_subscriptions: NotRequired[ProjectSubscriptions2Dict]
    destination: NotRequired[str]
    update_time: NotRequired[str]
    labels: NotRequired[dict[str, str]]
