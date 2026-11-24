from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Options(SdkBaseModel):
    slug_field: Optional[bool] = UNSET
    """Whether editors can see and edit the slug field."""


class OptionsDict(TypedDict):
    slug_field: NotRequired[bool]
