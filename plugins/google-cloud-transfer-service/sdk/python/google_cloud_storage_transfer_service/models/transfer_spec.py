from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_s3_compatible_data1 import AwsS3CompatibleData1, AwsS3CompatibleData1Dict
from .aws_s3_data2 import AwsS3Data2, AwsS3Data2Dict
from .azure_blob_storage_data2 import AzureBlobStorageData2, AzureBlobStorageData2Dict
from .gcs_data1 import GcsData1, GcsData1Dict
from .gcs_data2 import GcsData2, GcsData2Dict
from .gcs_data6 import GcsData6, GcsData6Dict
from .hdfs_data2 import HdfsData2, HdfsData2Dict
from .http_data2 import HttpData2, HttpData2Dict
from .object_conditions3 import ObjectConditions3, ObjectConditions3Dict
from .posix_filesystem1 import PosixFilesystem1, PosixFilesystem1Dict
from .posix_filesystem3 import PosixFilesystem3, PosixFilesystem3Dict
from .transfer_manifest2 import TransferManifest2, TransferManifest2Dict
from .transfer_options3 import TransferOptions3, TransferOptions3Dict


class TransferSpec(SdkBaseModel):
    """Configuration for running a transfer."""

    hdfs_data_source: Optional[HdfsData2] = Field(default=UNSET, alias="hdfsDataSource")
    """Optional. An HDFS cluster data source."""

    object_conditions: Optional[ObjectConditions3] = Field(default=UNSET, alias="objectConditions")
    """Only objects that satisfy these object conditions are included in the set of data source and data sink objects.
    Object conditions based on objects' "last modification time" do not exclude objects in a data sink."""

    gcs_data_source: Optional[GcsData6] = Field(default=UNSET, alias="gcsDataSource")
    """Optional. A Cloud Storage data source."""

    gcs_data_sink: Optional[GcsData1] = Field(default=UNSET, alias="gcsDataSink")
    """Optional. A Cloud Storage data sink."""

    http_data_source: Optional[HttpData2] = Field(default=UNSET, alias="httpDataSource")
    """Optional. An HTTP URL data source."""

    aws_s3_data_source: Optional[AwsS3Data2] = Field(default=UNSET, alias="awsS3DataSource")
    """Optional. An AWS S3 data source."""

    transfer_options: Optional[TransferOptions3] = Field(default=UNSET, alias="transferOptions")
    """If the option delete_objects_unique_in_sink is ``true`` and time-based object conditions such as 'last
    modification time' are specified, the request fails with an INVALID_ARGUMENT error."""

    posix_data_sink: Optional[PosixFilesystem3] = Field(default=UNSET, alias="posixDataSink")
    """Optional. A POSIX Filesystem data sink."""

    azure_blob_storage_data_source: Optional[AzureBlobStorageData2] = Field(
        default=UNSET, alias="azureBlobStorageDataSource"
    )
    """Optional. An Azure Blob Storage data source."""

    source_agent_pool_name: Optional[str] = Field(default=UNSET, alias="sourceAgentPoolName")
    """Specifies the agent pool name associated with the posix data source. When unspecified, the default name is
    used."""

    aws_s3_compatible_data_source: Optional[AwsS3CompatibleData1] = Field(
        default=UNSET, alias="awsS3CompatibleDataSource"
    )
    """Optional. An AWS S3 compatible data source."""

    posix_data_source: Optional[PosixFilesystem1] = Field(default=UNSET, alias="posixDataSource")
    """Optional. A POSIX Filesystem data source."""

    gcs_intermediate_data_location: Optional[GcsData2] = Field(default=UNSET, alias="gcsIntermediateDataLocation")
    """For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location
    through which to transfer data. See `Transfer data between file systems
    <https://cloud.google.com/storage-transfer/docs/file-to-file>`__ for more information."""

    transfer_manifest: Optional[TransferManifest2] = Field(default=UNSET, alias="transferManifest")
    """A manifest file provides a list of objects to be transferred from the data source. This field points to the
    location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply."""

    sink_agent_pool_name: Optional[str] = Field(default=UNSET, alias="sinkAgentPoolName")
    """Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used."""


class TransferSpecDict(TypedDict):
    hdfs_data_source: NotRequired[HdfsData2Dict]
    object_conditions: NotRequired[ObjectConditions3Dict]
    gcs_data_source: NotRequired[GcsData6Dict]
    gcs_data_sink: NotRequired[GcsData1Dict]
    http_data_source: NotRequired[HttpData2Dict]
    aws_s3_data_source: NotRequired[AwsS3Data2Dict]
    transfer_options: NotRequired[TransferOptions3Dict]
    posix_data_sink: NotRequired[PosixFilesystem3Dict]
    azure_blob_storage_data_source: NotRequired[AzureBlobStorageData2Dict]
    source_agent_pool_name: NotRequired[str]
    aws_s3_compatible_data_source: NotRequired[AwsS3CompatibleData1Dict]
    posix_data_source: NotRequired[PosixFilesystem1Dict]
    gcs_intermediate_data_location: NotRequired[GcsData2Dict]
    transfer_manifest: NotRequired[TransferManifest2Dict]
    sink_agent_pool_name: NotRequired[str]
