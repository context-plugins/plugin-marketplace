from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metadata_export import MetadataExport, MetadataExportDict
from .restore import Restore, RestoreDict


class MetadataManagementActivity2(SdkBaseModel):
    """Output only. The metadata management activities of the metastore service."""

    metadata_exports: Optional[list[MetadataExport]] = Field(default=UNSET, alias="metadataExports")
    """Output only. The latest metadata exports of the metastore service."""

    restores: Optional[list[Restore]] = UNSET
    """Output only. The latest restores of the metastore service."""


class MetadataManagementActivity2Dict(TypedDict):
    metadata_exports: NotRequired[list[MetadataExportDict]]
    restores: NotRequired[list[RestoreDict]]
