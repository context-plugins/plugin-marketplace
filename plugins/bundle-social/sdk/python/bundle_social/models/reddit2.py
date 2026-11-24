from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Reddit2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    subreddit_name: OptionalNullable[str] = UNSET


class Reddit2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    subreddit_name: NotRequired[str | None]
