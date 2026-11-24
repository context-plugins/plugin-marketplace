from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.overwrite_when import OverwriteWhenOrStr
from .metadata_options2 import MetadataOptions2, MetadataOptions2Dict


class TransferOptions(SdkBaseModel):
    """TransferOptions define the actions to be performed on objects in a transfer."""

    metadata_options: Optional[MetadataOptions2] = Field(default=UNSET, alias="metadataOptions")
    """Represents the selected metadata options for a transfer job."""

    overwrite_objects_already_existing_in_sink: Optional[bool] = Field(
        default=UNSET, alias="overwriteObjectsAlreadyExistingInSink"
    )
    """When to overwrite objects that already exist in the sink. The default is that only objects that are different
    from the source are overwritten. If true, all objects in the sink whose name matches an object in the source are
    overwritten with the source object."""

    delete_objects_unique_in_sink: Optional[bool] = Field(default=UNSET, alias="deleteObjectsUniqueInSink")
    """Whether objects that exist only in the sink should be deleted from the sink. **Note:** This option and
    delete_objects_from_source_after_transfer are mutually exclusive."""

    overwrite_when: Optional[OverwriteWhenOrStr] = Field(default=UNSET, alias="overwriteWhen")
    """When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by
    overwrite_objects_already_existing_in_sink."""

    delete_objects_from_source_after_transfer: Optional[bool] = Field(
        default=UNSET, alias="deleteObjectsFromSourceAfterTransfer"
    )
    """Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option
    and delete_objects_unique_in_sink are mutually exclusive."""


class TransferOptionsDict(TypedDict):
    metadata_options: NotRequired[MetadataOptions2Dict]
    overwrite_objects_already_existing_in_sink: NotRequired[bool]
    delete_objects_unique_in_sink: NotRequired[bool]
    overwrite_when: NotRequired[OverwriteWhenOrStr]
    delete_objects_from_source_after_transfer: NotRequired[bool]
