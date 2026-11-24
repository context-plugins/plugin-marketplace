from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .big_query_destination_config2 import BigQueryDestinationConfig2, BigQueryDestinationConfig2Dict
from .gcs_destination_config2 import GcsDestinationConfig2, GcsDestinationConfig2Dict


class DestinationConfig2(SdkBaseModel):
    """Required. Destination connection profile configuration."""

    gcs_destination_config: Optional[GcsDestinationConfig2] = Field(default=UNSET, alias="gcsDestinationConfig")
    """A configuration for how data should be loaded to Cloud Storage."""

    bigquery_destination_config: Optional[BigQueryDestinationConfig2] = Field(
        default=UNSET, alias="bigqueryDestinationConfig"
    )
    """BigQuery destination configuration."""

    destination_connection_profile: Optional[str] = Field(default=UNSET, alias="destinationConnectionProfile")
    """Required. Destination connection profile resource. Format:
    ``projects/{project}/locations/{location}/connectionProfiles/{name}``"""


class DestinationConfig2Dict(TypedDict):
    gcs_destination_config: NotRequired[GcsDestinationConfig2Dict]
    bigquery_destination_config: NotRequired[BigQueryDestinationConfig2Dict]
    destination_connection_profile: NotRequired[str]
