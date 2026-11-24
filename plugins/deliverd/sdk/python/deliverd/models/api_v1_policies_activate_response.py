from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1PoliciesActivateResponse(SdkBaseModel):
    id: UUID
    version: float
    active: bool


class ApiV1PoliciesActivateResponseDict(TypedDict):
    id: UUID
    version: float
    active: bool
