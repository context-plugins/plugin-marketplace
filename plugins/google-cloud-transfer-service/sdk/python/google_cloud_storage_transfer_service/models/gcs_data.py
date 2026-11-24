from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsData(SdkBaseModel):
    """In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time"
    refers to the object's ``updated`` property of Cloud Storage objects, which changes when the content or the metadata
    of the object is updated."""

    path: Optional[str] = UNSET
    """Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is
    treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet
    `Object Name Requirements </storage/docs/naming#objectnames>`__."""

    managed_folder_transfer_enabled: Optional[bool] = Field(default=UNSET, alias="managedFolderTransferEnabled")
    """Preview. Enables the transfer of managed folders between Cloud Storage buckets. Set this option on the
    gcs_data_source. If set to true: - Managed folders in the source bucket are transferred to the destination bucket. -
    Managed folders in the destination bucket are overwritten. Other OVERWRITE options are not supported. See `Transfer
    Cloud Storage managed folders </storage-transfer/docs/managed-folders>`__."""

    bucket_name: Optional[str] = Field(default=UNSET, alias="bucketName")
    """Required. Cloud Storage bucket name. Must meet `Bucket Name Requirements
    </storage/docs/naming#requirements>`__."""


class GcsDataDict(TypedDict):
    path: NotRequired[str]
    managed_folder_transfer_enabled: NotRequired[bool]
    bucket_name: NotRequired[str]
