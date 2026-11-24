from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksBulkResponse(SdkBaseModel):
    deleted_count: float = Field(alias="deletedCount")
    """The number of links deleted."""


class LinksBulkResponseDict(TypedDict):
    deleted_count: float
