from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeExportRequest(SdkBaseModel):
    export_id: str = Field(alias="exportId")
    """The unique identifier of the export to describe."""


class DescribeExportRequestDict(TypedDict):
    export_id: str
