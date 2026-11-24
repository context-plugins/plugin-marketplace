from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_doi_t_cloud_diagrams_api import StatusDoiTCloudDiagramsApiOrStr
from .enums.type6 import Type6OrStr


class CloudDiagramImportState(SdkBaseModel):
    """Current import/sync state for a cloud-connected diagram."""

    status: Optional[StatusDoiTCloudDiagramsApiOrStr] = UNSET
    """Import status."""

    type_: Optional[Type6OrStr] = Field(default=UNSET, alias="type")
    """Connected cloud account type."""

    account: Optional[str] = UNSET
    """Connected account ID."""

    cloud_id: Optional[str] = Field(default=UNSET, alias="cloudId")
    """Cloud account ID."""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Error message if the import failed."""

    synced_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="syncedAt")
    """Timestamp of the last successful sync."""


class CloudDiagramImportStateDict(TypedDict):
    status: NotRequired[StatusDoiTCloudDiagramsApiOrStr]
    type_: NotRequired[Type6OrStr]
    account: NotRequired[str]
    cloud_id: NotRequired[str]
    error_message: NotRequired[str]
    synced_at: NotRequired[RFC3339DateTime]
