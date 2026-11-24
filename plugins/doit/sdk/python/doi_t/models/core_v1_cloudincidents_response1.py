from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform1 import Platform1OrStr
from .enums.status_doi_t_cloud_incidents_api import StatusDoiTCloudIncidentsApiOrStr


class CoreV1CloudincidentsResponse1(SdkBaseModel):
    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when this cloud incident was created, in milliseconds since the epoch."""

    description: Optional[str] = UNSET
    """Detailed explanation on the cloud incident."""

    id: Optional[str] = UNSET
    """The unique id of a cloud incident"""

    platform: Optional[Platform1OrStr] = UNSET
    """The cloud platform."""

    product: Optional[str] = UNSET
    """The name of the product affected by the cloud incident"""

    status: Optional[StatusDoiTCloudIncidentsApiOrStr] = UNSET
    """The Status of the issue"""

    summary: Optional[str] = UNSET
    """A summary of the cloud incident."""

    symptoms: Optional[str] = UNSET
    """Cloud incident symptoms, if available."""

    title: Optional[str] = UNSET
    """Cloud incident name provided by the cloud vendor."""

    workaround: Optional[str] = UNSET
    """Mitigation workaround for the cloud incident, if available."""


class CoreV1CloudincidentsResponse1Dict(TypedDict):
    create_time: NotRequired[int]
    description: NotRequired[str]
    id: NotRequired[str]
    platform: NotRequired[Platform1OrStr]
    product: NotRequired[str]
    status: NotRequired[StatusDoiTCloudIncidentsApiOrStr]
    summary: NotRequired[str]
    symptoms: NotRequired[str]
    title: NotRequired[str]
    workaround: NotRequired[str]
