from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform import PlatformOrStr
from .enums.status_doi_t_cloud_incidents_api import StatusDoiTCloudIncidentsApiOrStr


class CloudIncidentListItem(SdkBaseModel):
    """Summary information for a cloud incident."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The creation time of this cloud incident, in milliseconds since the epoch."""

    id: Optional[str] = UNSET
    """The unique cloud incident identifier."""

    platform: Optional[PlatformOrStr] = UNSET
    """The Cloud Platform."""

    product: Optional[str] = UNSET
    """The name of the product affected by the cloud incident"""

    status: Optional[StatusDoiTCloudIncidentsApiOrStr] = UNSET
    """The Status of the issue"""

    title: Optional[str] = UNSET
    """Cloud incident name as provided by the cloud platform vendor"""


class CloudIncidentListItemDict(TypedDict):
    create_time: NotRequired[int]
    id: NotRequired[str]
    platform: NotRequired[PlatformOrStr]
    product: NotRequired[str]
    status: NotRequired[StatusDoiTCloudIncidentsApiOrStr]
    title: NotRequired[str]
