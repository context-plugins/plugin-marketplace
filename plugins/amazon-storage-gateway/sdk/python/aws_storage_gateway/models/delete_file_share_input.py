from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteFileShareInput(SdkBaseModel):
    file_share_arn: str = Field(alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the file share to be deleted."""

    force_delete: Optional[bool] = Field(default=UNSET, alias="ForceDelete")
    """If this value is set to true, the operation deletes a file share immediately and aborts all data uploads to
    Amazon Web Services. Otherwise, the file share is not deleted until all data is uploaded to Amazon Web Services.
    This process aborts the data upload process, and the file share enters the FORCE_DELETING status. Valid Values: true
    | false"""


class DeleteFileShareInputDict(TypedDict):
    file_share_arn: str
    force_delete: NotRequired[bool]
