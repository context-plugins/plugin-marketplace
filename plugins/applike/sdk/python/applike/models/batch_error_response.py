from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchErrorResponse(SdkBaseModel):
    batch_id: UUID = Field(alias="batchId")
    """36 character uuid of the batch"""

    error: str
    """description of the error"""

    status_code: int = Field(alias="statusCode")
    """The HTTP status code"""


class BatchErrorResponseDict(TypedDict):
    batch_id: UUID
    error: str
    status_code: int
