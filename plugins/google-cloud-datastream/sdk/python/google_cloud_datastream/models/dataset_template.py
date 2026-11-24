from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetTemplate(SdkBaseModel):
    """Dataset template used for dynamic dataset creation."""

    location: Optional[str] = UNSET
    """Required. The geographic location where the dataset should reside. See
    https://cloud.google.com/bigquery/docs/locations for supported locations."""

    kms_key_name: Optional[str] = Field(default=UNSET, alias="kmsKeyName")
    """Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery
    Service Account associated with your project requires access to this encryption key. i.e.
    projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See
    https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information."""

    dataset_id_prefix: Optional[str] = Field(default=UNSET, alias="datasetIdPrefix")
    """If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be
    separated by an underscore. i.e. _."""


class DatasetTemplateDict(TypedDict):
    location: NotRequired[str]
    kms_key_name: NotRequired[str]
    dataset_id_prefix: NotRequired[str]
