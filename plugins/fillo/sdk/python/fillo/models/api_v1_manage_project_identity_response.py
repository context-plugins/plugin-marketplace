from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageProjectIdentityResponse(SdkBaseModel):
    enabled: bool
    protected_form_count: int = Field(alias="protectedFormCount")


class ApiV1ManageProjectIdentityResponseDict(TypedDict):
    enabled: bool
    protected_form_count: int
