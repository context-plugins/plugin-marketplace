from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetastoreConfig(SdkBaseModel):
    """Specifies a Metastore configuration."""

    dataproc_metastore_service: Optional[str] = Field(default=UNSET, alias="dataprocMetastoreService")
    """Required. Resource name of an existing Metastore service.Example:
    projects/[project_id]/locations/[dataproc_region]/services/[service-name]"""


class MetastoreConfigDict(TypedDict):
    dataproc_metastore_service: NotRequired[str]
