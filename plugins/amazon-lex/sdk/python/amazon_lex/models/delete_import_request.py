from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteImportRequest(SdkBaseModel):
    import_id: str = Field(alias="importId")
    """The unique identifier of the import to delete."""


class DeleteImportRequestDict(TypedDict):
    import_id: str
