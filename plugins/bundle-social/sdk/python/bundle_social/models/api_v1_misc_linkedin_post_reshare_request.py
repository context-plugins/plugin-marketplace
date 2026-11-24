from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.visibility import Visibility, VisibilityOrStr


class ApiV1MiscLinkedinPostReshareRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    parent_post_urn: str = Field(alias="parentPostUrn")
    """LinkedIn post URN to reshare"""

    commentary: str
    visibility: VisibilityOrStr | None = Visibility.PUBLIC
    disable_reshare: bool | None = Field(default=False, alias="disableReshare")


class ApiV1MiscLinkedinPostReshareRequestDict(TypedDict):
    team_id: str
    parent_post_urn: str
    commentary: str
    visibility: NotRequired[VisibilityOrStr | None]
    disable_reshare: NotRequired[bool | None]
