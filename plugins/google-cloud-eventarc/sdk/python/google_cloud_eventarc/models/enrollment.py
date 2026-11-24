from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Enrollment(SdkBaseModel):
    """An enrollment represents a subscription for messages on a particular message bus. It defines a matching criteria
    for messages on the bus and the subscriber endpoint where matched messages should be delivered."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the form projects/{project}/locations/{location}/enrollments/{enrollment}"""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields, and might be sent only
    on update and delete requests to ensure that the client has an up-to-date value before proceeding."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""

    message_bus: Optional[str] = Field(default=UNSET, alias="messageBus")
    """Required. Immutable. Resource name of the message bus identifying the source of the messages. It matches the form
    projects/{project}/locations/{location}/messageBuses/{messageBus}."""

    destination: Optional[str] = UNSET
    """Required. Destination is the Pipeline that the Enrollment is delivering to. It must point to the full resource
    name of a Pipeline. Format: "projects/{PROJECT_ID}/locations/{region}/pipelines/{PIPELINE_ID)"
    """

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""

    uid: Optional[str] = UNSET
    """Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""

    cel_match: Optional[str] = Field(default=UNSET, alias="celMatch")
    """Required. A CEL expression identifying which messages this enrollment applies to."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Resource display name."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. Resource annotations."""


class EnrollmentDict(TypedDict):
    name: NotRequired[str]
    etag: NotRequired[str]
    create_time: NotRequired[str]
    message_bus: NotRequired[str]
    destination: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    uid: NotRequired[str]
    cel_match: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    annotations: NotRequired[dict[str, str]]
