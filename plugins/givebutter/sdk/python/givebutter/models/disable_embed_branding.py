from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableEmbedBranding(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_embed_branding"] = "disable_embed_branding"
    value: OptionalNullable[bool] = UNSET


class DisableEmbedBrandingDict(TypedDict):
    name: Literal["disable_embed_branding"]
    value: NotRequired[bool | None]
