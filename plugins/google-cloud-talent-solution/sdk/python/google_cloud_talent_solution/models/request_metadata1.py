from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .device_info2 import DeviceInfo2, DeviceInfo2Dict


class RequestMetadata1(SdkBaseModel):
    """Required. The meta information collected about the job searcher, used to improve the search quality of the
    service. The identifiers (such as ``user_id``) are provided by users, and must be unique and consistent."""

    allow_missing_ids: Optional[bool] = Field(default=UNSET, alias="allowMissingIds")
    """Only set when any of domain, session_id and user_id isn't available for some reason. It is highly recommended not
    to set this field and provide accurate domain, session_id and user_id for the best service experience."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """Required if allow_missing_ids is unset or ``false``. A unique session identification string. A session is defined
    as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for
    privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant
    site rely on this field being set correctly to a unique session ID. The maximum number of allowed characters is
    255."""

    device_info: Optional[DeviceInfo2] = Field(default=UNSET, alias="deviceInfo")
    """The type of device used by the job seeker at the time of the call to the service."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """Required if allow_missing_ids is unset or ``false``. A unique user identification string, as determined by the
    client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this
    field for privacy concerns before providing it to the service. Note that any improvements to the model for a
    particular tenant site rely on this field being set correctly to a unique user ID. The maximum number of allowed
    characters is 255."""

    domain: Optional[str] = UNSET
    """Required if allow_missing_ids is unset or ``false``. The client-defined scope or source of the service call,
    which typically is the domain on which the service has been implemented and is currently being run. For example, if
    the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this
    field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. Note that any
    improvements to the model for a particular tenant site rely on this field being set correctly to a unique domain.
    The maximum number of allowed characters is 255."""


class RequestMetadata1Dict(TypedDict):
    allow_missing_ids: NotRequired[bool]
    session_id: NotRequired[str]
    device_info: NotRequired[DeviceInfo2Dict]
    user_id: NotRequired[str]
    domain: NotRequired[str]
