from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TopicLabels(SdkBaseModel):
    category: OptionalNullable[str] = UNSET
    subcategory: OptionalNullable[str] = UNSET


class TopicLabelsDict(TypedDict):
    category: NotRequired[str | None]
    subcategory: NotRequired[str | None]
