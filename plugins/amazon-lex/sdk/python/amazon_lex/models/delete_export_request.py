from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteExportRequest(SdkBaseModel):
    export_id: str = Field(alias="exportId")
    """The unique identifier of the export to delete."""


class DeleteExportRequestDict(TypedDict):
    export_id: str
