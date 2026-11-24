from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagFilter(SdkBaseModel):
    tag: str
    """Specifies the tag that must be associated with the execution for it to meet the filter criteria. Tags may only
    contain unicode letters, digits, whitespace, or these symbols: _ . : / = + - @."""


class TagFilterDict(TypedDict):
    tag: str
