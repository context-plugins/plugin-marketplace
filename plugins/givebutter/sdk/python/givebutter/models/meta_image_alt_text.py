from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MetaImageAltText(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["meta_image_alt_text"] = "meta_image_alt_text"
    value: OptionalNullable[str] = UNSET


class MetaImageAltTextDict(TypedDict):
    name: Literal["meta_image_alt_text"]
    value: NotRequired[str | None]
