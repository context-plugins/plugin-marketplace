from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SocialLinks2(SdkBaseModel):
    linkedin: OptionalNullable[str] = UNSET


class SocialLinks2Dict(TypedDict):
    linkedin: NotRequired[str | None]
