from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.metastore_type import MetastoreTypeOrStr


class BackendMetastore(SdkBaseModel):
    """Represents a backend metastore for the federation."""

    name: Optional[str] = UNSET
    """The relative resource name of the metastore that is being federated. The formats of the relative resource names
    for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore
    projects/{project_id}/locations/{location}/services/{service_id}"""

    metastore_type: Optional[MetastoreTypeOrStr] = Field(default=UNSET, alias="metastoreType")
    """The type of the backend metastore."""


class BackendMetastoreDict(TypedDict):
    name: NotRequired[str]
    metastore_type: NotRequired[MetastoreTypeOrStr]
