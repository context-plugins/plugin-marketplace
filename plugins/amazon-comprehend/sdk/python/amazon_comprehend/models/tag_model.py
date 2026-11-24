from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want
    to show which resources are used by which departments, you might use “Department” as the key portion of the pair,
    with multiple possible values such as “sales,” “legal,” and “administration.”"""

    value: Optional[str] = Field(default=UNSET, alias="Value")
    """The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want
    to show which resources are used by which departments, you might use “Department” as the initial (key) portion of
    the pair, with a value of “sales” to indicate the sales department."""


class TagModelDict(TypedDict):
    key: str
    value: NotRequired[str]
