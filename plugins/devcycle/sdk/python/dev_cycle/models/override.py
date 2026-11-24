from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Override(SdkBaseModel):
    project: str = Field(alias="_project")
    environment: str = Field(alias="_environment")
    feature: str = Field(alias="_feature")
    variation: str = Field(alias="_variation")
    dvc_user_id: str = Field(alias="dvcUserId")
    created_at: float = Field(alias="createdAt")
    updated_at: float = Field(alias="updatedAt")
    a0_user: Optional[str] = UNSET


class OverrideDict(TypedDict):
    project: str
    environment: str
    feature: str
    variation: str
    dvc_user_id: str
    created_at: float
    updated_at: float
    a0_user: NotRequired[str]
