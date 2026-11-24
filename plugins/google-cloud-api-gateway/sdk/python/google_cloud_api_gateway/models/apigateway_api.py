from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class ApigatewayApi(SdkBaseModel):
    """An API that can be served by one or more Gateways."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Updated time."""

    managed_service: Optional[str] = Field(default=UNSET, alias="managedService")
    """Optional. Immutable. The name of a Google Managed Service (
    https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will
    automatically be created in the same project as this API."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the API. Format: projects/{project}/locations/global/apis/{api}"""

    state: Optional[StateOrStr] = UNSET
    """Output only. State of the API."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Created time."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more
    details. https://cloud.google.com/compute/docs/labeling-resources"""


class ApigatewayApiDict(TypedDict):
    update_time: NotRequired[str]
    managed_service: NotRequired[str]
    display_name: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[StateOrStr]
    create_time: NotRequired[str]
    labels: NotRequired[dict[str, str]]
