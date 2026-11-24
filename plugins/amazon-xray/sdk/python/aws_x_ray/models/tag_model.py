from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """A tag key, such as Stage or Name. A tag key cannot be empty. The key can be a maximum of 128 characters, and can
    contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /"""

    value: str = Field(alias="Value")
    """An optional tag value, such as Production or test-only. The value can be a maximum of 255 characters, and contain
    only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /"""


class TagModelDict(TypedDict):
    key: str
    value: str
