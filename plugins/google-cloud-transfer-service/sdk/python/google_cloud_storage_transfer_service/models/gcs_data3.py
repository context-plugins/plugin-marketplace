from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsData3(SdkBaseModel):
    """The Cloud Storage bucket to which to replicate objects."""

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


class GcsData3Dict(TypedDict):
    path: NotRequired[str]
    managed_folder_transfer_enabled: NotRequired[bool]
    bucket_name: NotRequired[str]
