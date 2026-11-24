from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageProjectIdentityResponse1(SdkBaseModel):
    enabled: Literal["True"] = "True"
    minted: bool
    secret: Optional[str] = UNSET
    """Present only when minted is true. Shown once — store it now."""

    protected_form_count: int = Field(alias="protectedFormCount")


class ApiV1ManageProjectIdentityResponse1Dict(TypedDict):
    enabled: Literal["True"]
    minted: bool
    secret: NotRequired[str]
    protected_form_count: int
