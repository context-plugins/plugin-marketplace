from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag
    Department:Sales, the key is 'Department'."""

    value: str = Field(alias="Value")
    """The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag
    Department:Sales, the value is 'Sales'. Note that you can set the value of a tag to an empty string, but you can't
    set the value of a tag to null. Omitting the tag value is the same as using an empty string."""


class TagModelDict(TypedDict):
    key: str
    value: str
