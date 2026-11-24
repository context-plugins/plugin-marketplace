from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeImportRequest(SdkBaseModel):
    import_id: str = Field(alias="importId")
    """The unique identifier of the import to describe."""


class DescribeImportRequestDict(TypedDict):
    import_id: str
