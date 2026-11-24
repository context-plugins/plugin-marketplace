from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_data3 import GcsData3, GcsData3Dict
from .gcs_data4 import GcsData4, GcsData4Dict
from .object_conditions1 import ObjectConditions1, ObjectConditions1Dict
from .transfer_options1 import TransferOptions1, TransferOptions1Dict


class ReplicationSpec(SdkBaseModel):
    """Specifies the configuration for a cross-bucket replication job. Cross-bucket replication copies new or updated
    objects from a source Cloud Storage bucket to a destination Cloud Storage bucket. Existing objects in the source
    bucket are not copied by a new cross-bucket replication job."""

    object_conditions: Optional[ObjectConditions1] = Field(default=UNSET, alias="objectConditions")
    """Object conditions that determine which objects are transferred. For replication jobs, only ``include_prefixes``
    and ``exclude_prefixes`` are supported."""

    gcs_data_sink: Optional[GcsData3] = Field(default=UNSET, alias="gcsDataSink")
    """The Cloud Storage bucket to which to replicate objects."""

    transfer_options: Optional[TransferOptions1] = Field(default=UNSET, alias="transferOptions")
    """Specifies the metadata options to be applied during replication. Delete options are not supported. If a delete
    option is specified, the request fails with an INVALID_ARGUMENT error."""

    gcs_data_source: Optional[GcsData4] = Field(default=UNSET, alias="gcsDataSource")
    """The Cloud Storage bucket from which to replicate objects."""


class ReplicationSpecDict(TypedDict):
    object_conditions: NotRequired[ObjectConditions1Dict]
    gcs_data_sink: NotRequired[GcsData3Dict]
    transfer_options: NotRequired[TransferOptions1Dict]
    gcs_data_source: NotRequired[GcsData4Dict]
