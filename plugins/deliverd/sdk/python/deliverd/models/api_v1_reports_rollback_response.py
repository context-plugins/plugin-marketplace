from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ReportsRollbackResponse(SdkBaseModel):
    ok: bool
    version: float
    version_id: str = Field(alias="versionId")


class ApiV1ReportsRollbackResponseDict(TypedDict):
    ok: bool
    version: float
    version_id: str
