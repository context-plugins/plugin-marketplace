from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Linkedin2BundleSocialCommentApi(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    comment_urn: OptionalNullable[str] = Field(default=UNSET, alias="commentUrn")
    permalink: OptionalNullable[str] = UNSET


class Linkedin2BundleSocialCommentApiDict(TypedDict):
    id: NotRequired[str | None]
    comment_urn: NotRequired[str | None]
    permalink: NotRequired[str | None]
