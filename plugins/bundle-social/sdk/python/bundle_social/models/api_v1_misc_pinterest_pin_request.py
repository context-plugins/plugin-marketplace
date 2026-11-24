from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscPinterestPinRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post in our database"""

    title: Optional[str] = UNSET
    """The updated title"""

    description: Optional[str] = UNSET
    """The updated description"""

    link: Optional[str] = UNSET
    """The updated destination link"""

    alt_text: Optional[str] = Field(default=UNSET, alias="altText")
    """The updated alt text"""

    note: Optional[str] = UNSET
    """The updated note"""


class ApiV1MiscPinterestPinRequestDict(TypedDict):
    team_id: str
    post_id: str
    title: NotRequired[str]
    description: NotRequired[str]
    link: NotRequired[str]
    alt_text: NotRequired[str]
    note: NotRequired[str]
