from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DatastoreConfig2(SdkBaseModel):
    """Datastore Configurations."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Required. Google Cloud project in which the datastore exists"""

    path: Optional[str] = UNSET
    """Path of Cloud Storage bucket Required for ``gcs`` target_type."""

    bucket_name: Optional[str] = Field(default=UNSET, alias="bucketName")
    """Name of the Cloud Storage bucket. Required for ``gcs`` target_type."""

    dataset_name: Optional[str] = Field(default=UNSET, alias="datasetName")
    """BigQuery dataset name Required for ``bigquery`` target_type."""

    table_prefix: Optional[str] = Field(default=UNSET, alias="tablePrefix")
    """Prefix of BigQuery table Required for ``bigquery`` target_type."""


class GoogleCloudApigeeV1DatastoreConfig2Dict(TypedDict):
    project_id: NotRequired[str]
    path: NotRequired[str]
    bucket_name: NotRequired[str]
    dataset_name: NotRequired[str]
    table_prefix: NotRequired[str]
