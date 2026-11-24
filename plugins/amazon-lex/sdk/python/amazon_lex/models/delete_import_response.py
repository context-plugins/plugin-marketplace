from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.import_status import ImportStatusOrStr


class DeleteImportResponse(SdkBaseModel):
    import_id: Optional[str] = Field(default=UNSET, alias="importId")
    """The unique identifier of the deleted import."""

    import_status: Optional[ImportStatusOrStr] = Field(default=UNSET, alias="importStatus")
    """The current status of the deletion. When the deletion is complete, the import will no longer be returned by the
    ListImports operation and calls to the DescribeImport operation with the import identifier will fail."""


class DeleteImportResponseDict(TypedDict):
    import_id: NotRequired[str]
    import_status: NotRequired[ImportStatusOrStr]
